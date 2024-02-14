import { Request, Response } from "express";
import User from "../models/user.models";

export const createCurrentUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body;

		if (!auth0Id) {
			return res.status(400).json({
				message: "Please provide auth0Id",
			});
		}

		const existingUser = await User.findOne({ auth0Id });

		if (existingUser) {
			return res.status(200).send();
		}

		const newUser = new User(req.body);

		await newUser.save();

		res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Error creating user",
		});
	}
};
