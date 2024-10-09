import express from "express";

const router = express.Router();

router.get("/posts", (req, res, next) => console.log("router works"));
router.post("/posts", (req, res, next) => console.log("router works"));
router.put("/posts", (req, res, next) => console.log("router works"));
router.delete("/posts", (req, res, next) => console.log("router works"));

export default router;
