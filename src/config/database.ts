import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI as string);
		console.log("SUCCESSFULLY CONNECTED TO DATABASE");
	} catch (error) {
		console.log("ERROR WHILE CONNECTING TO DATABASE", error);
	}
};
