"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = void 0;
const create = (model) => async (req, res, _next) => {
    const body = { ...req.body };
    try {
        const doc = await model.create(body);
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.send({ ok: false, msg: 'Element cannot be created' });
    }
};
exports.create = create;
const update = (model) => async (req, res, _next) => {
    // const {sub} = req.user;
    //We cast the _id string to an ObjectId with mongoose to update that task
    // const id = new mongoose.Types.ObjectId("6329a12f5fe2f00951e13624");
    const { id } = req.params;
    const body = { ...req.body };
    try {
        const doc = await model.findByIdAndUpdate(id, { $set: { body } });
        res.status(200).send({ ok: true, data: doc });
    }
    catch (error) {
        res.status(400).send({ ok: false, msg: 'Element cannot be updated' });
    }
};
exports.update = update;
//# sourceMappingURL=baseController.js.map