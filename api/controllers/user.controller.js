import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api router is working!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));

  try {
    const updates = { ...req.body };

    if (updates.password) {
      updates.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const allowedUpdates = [
      "email",
      "username",
      "avatar",
      "phone",
      "address",
      "preferences",
    ];
    const filteredUpdates = Object.keys(updates).reduce((obj, key) => {
      if (allowedUpdates.includes(key)) {
        obj[key] = updates[key];
      }
      return obj;
    }, {});

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: filteredUpdates,
      },
      { new: true }
    ).select("-password"); // Explicitly exclude password in the return

    if (!updatedUser) {
      return next(errorHandler(404, "User not found!"));
    }

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
