import { Model } from "mongoose";
import { NextFunction, Response } from "express";
import AuthRequest from "../../middleware/authenticate";

const create =
	<T>(model: Model<T>) =>
	async ({ body }: AuthRequest, res: Response, _next: NextFunction) => {
		try {
			const doc = await model.create(body);

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(400).send({ ok: false, msg: "Element cannot be created" });
		}
	};

const read =
	<T>(model: Model<T>) =>
	async ({ params: { id: _id } }: AuthRequest, res: Response, _next: NextFunction) => {
		try {
			const doc = await model.findOne({ _id }).lean().exec();

			if (!doc)
				return res.status(400).send({ ok: false, msg: "Cannot read a document that not exist" });

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			console.log(error);
			res.status(400).send({ ok: false, msg: error.message });
		}
	};

const readAll =
	<T>(model: Model<T>) =>
	async ({ query }: AuthRequest, res: Response, _next: NextFunction) => {
		const filter = query as Partial<T>;
		try {
			const doc = await model
				.find({ ...filter })
				.lean()
				.exec();
			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(400).send({ ok: false, msg: "Elements cannot be found" });
		}
	};

const update =
	<T>(model: Model<T>) =>
	async ({ params: { id }, body }: AuthRequest, res: Response, _next: NextFunction) => {
		try {
			const doc = await model
				.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
				.lean()
				.exec();

			if (!doc)
				return res.status(400).send({ ok: false, msg: "Cannot update a document that not exist" });

			res.status(200).send({ ok: true, data: doc });
		} catch (error) {
			res.status(400).send({ ok: false, msg: "Element cannot be updated" });
		}
	};

const remove =
	<T>(model: Model<T>) =>
	async ({ params: { id } }: AuthRequest, res: Response, _next: NextFunction) => {
		try {
			const doc = await model.findByIdAndDelete(id);

			if (!doc)
				return res.status(400).send({ ok: false, msg: `Cannot delete a that does not exist` });

			res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
		} catch (error) {
			res.status(400).send({ ok: false, msg: "Element cannot be deleted" });
		}
	};

export { create, read, update, remove, readAll };
