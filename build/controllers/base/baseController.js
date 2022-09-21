"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAll = exports.remove = exports.update = exports.read = exports.create = void 0;
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("../../utils/cloudinary"));
const create = (model) => async (req, res, _next) => {
    const body = { ...req.body };
    try {
        const doc = await model.create(body);
        const sanitizeDoc = doc.toObject();
        "password" in sanitizeDoc && delete sanitizeDoc["password"];
        res.status(200).send({ ok: true, data: sanitizeDoc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be created" });
    }
};
exports.create = create;
const read = (model) => async (req, res, _next) => {
    const { id } = req.params;
    try {
        const doc = await model.findById(id, "-password").lean().exec();
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ ok: false, msg: "Element cannot be found" });
    }
};
exports.read = read;
const readAll = (model) => async (_req, res, _next) => {
    try {
        const doc = await model.find({}, "-password").lean().exec();
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Elements cannot be found" });
    }
};
exports.readAll = readAll;
const update = (model) => async (req, res, _next) => {
    const { id } = req.params;
    const body = { ...req.body };
    try {
        const fileImage = req.body?.profilePicture;
        let uploadResponseCloudinary;
        if (fileImage != undefined) {
            uploadResponseCloudinary = await cloudinary_1.default.uploader.upload(fileImage, {
                upload_preset: 'profile'
            }, function (_error, result) { console.log(result); });
            console.log(uploadResponseCloudinary);
            body["profilePicture"] != undefined && uploadResponseCloudinary.url_secure;
        }
        const doc = await model
            .findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
            .lean()
            .exec();
        "password" in doc && delete doc["password"];
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be updated" });
    }
};
exports.update = update;
const remove = (model) => async (req, res, _next) => {
    const { id } = req.params;
    try {
        const doc = await model.findByIdAndDelete(id);
        res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: "Element cannot be deleted" });
    }
};
exports.remove = remove;
//# sourceMappingURL=baseController.js.map