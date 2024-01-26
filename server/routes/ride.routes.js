import express from "express";
import { createRide, getAllRides, getRide, updateRide, deleteRide } from "../controllers/ride.js";

const router = express.Router()

router.get("/", getAllRides)
router.post("/", createRide)

router.get("/:id", getRide)
router.patch("/:id", updateRide)
router.delete("/:id", deleteRide)

export default router