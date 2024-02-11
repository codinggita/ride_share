import express from "express";
import { createRide, getAllRides, getRide, updateRide, deleteRide, findRides } from "../controllers/ride.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/", verifyAdmin, getAllRides)
router.post("/", verifyToken, createRide)
router.get("/find", findRides)

router.get("/:id", getRide)
router.patch("/:id", verifyUser, updateRide)
router.delete("/:id", verifyToken, deleteRide)

export default router