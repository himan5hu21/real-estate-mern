import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    guestrooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["buy", "rent"],
    },
    imageUrls: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
