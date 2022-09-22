"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAll = exports.remove = exports.update = exports.read = exports.create = void 0;
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("../../utils/cloudinary"));
const BoardModel_1 = tslib_1.__importDefault(require("../../models/Boards/BoardModel"));
const UsersModel_1 = tslib_1.__importDefault(require("../../models/Users/UsersModel"));
const create = (model) => async (req, res, _next) => {
    const body = { ...req.body };
    if (body["board"]) {
        try {
            const exist = await BoardModel_1.default.findById(`${body["board"]}`).lean().exec();
            if (exist == null) {
                res.status(400).send({ ok: false, msg: "The project selected does not exists" });
                return;
            }
        }
        catch (error) {
            return res.status(400).send(error);
        }
    }
    if (body["employees"]) {
        const employees = [body["employees"]];
        try {
            //Llegaran varios empleados hay que hacer un map y comprobar si alguno no existe se manda el error
            employees.map(async (employee) => {
                const exist = await UsersModel_1.default.findById(employee).lean().exec();
                if (exist == null) {
                    res.status(400).send({ ok: false, msg: "The user selected does not exists" });
                    return;
                }
            });
        }
        catch (error) {
            return res.status(400).send(error);
        }
    }
    try {
        const doc = await model.create(body);
        const sanitizeDoc = doc.toObject();
        "password" in sanitizeDoc && delete sanitizeDoc["password"];
        res.status(200).send({ ok: true, data: sanitizeDoc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: error.message });
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
const urlProfilePictureCloudinary = async (imageInfo, body) => {
    const cloudInfo = await cloudinary_1.default.uploader.upload(imageInfo, {
        upload_preset: 'photos'
    }, function (_error, result) {
        body["profilePicture"] = result.secure_url;
        return body;
    });
    return cloudInfo;
};
const update = (model) => async (req, res, _next) => {
    const { id } = req.params;
    const body = { ...req.body };
    try {
        const fileImage = req.body?.profilePicture;
        if (fileImage != undefined && fileImage != "") {
            const dataBody = await urlProfilePictureCloudinary(req.body?.profilePicture, body);
            body["profilePicture"] = dataBody.secure_url;
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