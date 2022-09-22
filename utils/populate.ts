import { NextFunction } from "express";

export default (field: string | string[]) =>
	function (next: NextFunction) {
		this.populate(field);
		next();
	};
