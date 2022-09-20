import { Model } from "mongoose"
import { NextFunction, Request, Response } from "express"
import AuthRequest from '../../middleware/authenticate';

const create = <T>(model: Model<T>) => async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const body = { ...req.body } as T
    try {
        const doc = await model.create(body)
        res.status(200).send({ ok: true, data: doc })
    } catch (error) {
        res.send({ ok: false, msg: 'Element cannot be created' })
    }
}

const update = <T>(model: Model<T>) => async (req: AuthRequest, res: Response, _next: NextFunction) => {
    // const {sub} = req.user;

    //We cast the _id string to an ObjectId with mongoose to update that task
    // const id = new mongoose.Types.ObjectId("6329a12f5fe2f00951e13624");
    const { id } = req.params
    const body = { ...req.body } as T;

    try {
        const doc = await model.findByIdAndUpdate(id, { $set: { body } })

        res.status(200).send({ ok: true, data: doc })
    } catch (error) {

        res.status(400).send({ ok: false, msg: 'Element cannot be updated' })
    }

}

export {create, update}


