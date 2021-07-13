import express from "express";
import { currentUser } from "@ma-tickets/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
	console.log("request was made");
	res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
