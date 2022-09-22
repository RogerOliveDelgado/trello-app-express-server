import { Schema, model, SchemaTypes } from "mongoose";
import IUser, { IUserMethods, UserModel } from "./Users.interface";
import bcrypt from "bcrypt";
import { NextFunction } from "express";

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
	firstName: {
		type: String,
		required: [true, "First name required"],
	},
	lastName: {
		type: String,
		required: [true, "Last name required"],
	},
	address: {
		type: String,
		required: [true, "Address required"],
	},
	birthday: {
		type: Date,
		required: [true, "Birthday required"],
	},
	email: {
		type: String,
		required: [true, "Email required"],
	},
	password: {
		type: String,
		required: [true, "Password required"],
		select: false,
	},
	role: {
		type: String,
		required: [true, "Role required"],
	},
	profilePicture: {
		type: String,
	},
	tasks: [
		{
			type: SchemaTypes.ObjectId,
			default: [],
			ref: "Task",
		},
	],
});

UserSchema.method("comparePassword", async function (candidatePassword: string): Promise<boolean> {
	try {
		return await bcrypt.compare(candidatePassword, this.password);
	} catch (error) {
		return false;
	}
});

UserSchema.pre("save", async function (next: NextFunction) {
	if (!this.isModified("password")) {
		return next();
	}
	try {
		const hash = await bcrypt.hash(this.password, 12);
		this.password = hash;
		return next();
	} catch (error) {
		return next(error);
	}
});

UserSchema.pre("findOne", function (next) {
	this.populate("tasks");
	next();
});

UserSchema.set("toJSON", {
	transform: (_: unknown, result: { password?: string; __v?: number }) => {
		delete result.password;
		delete result.__v;
		return result;
	},
});

const UserModel = model<IUser, UserModel>("User", UserSchema);

export default UserModel;
