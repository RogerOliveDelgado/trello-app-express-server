import mongoose, { Model} from "mongoose";
import { NextFunction, Request, Response } from "express";
import AuthRequest from "../../middleware/authenticate";
import cloudinaryAuth from '../../utils/cloudinary'
import BoardModel from '../../models/Boards/BoardModel'
import UserModel from "../../models/Users/UsersModel";

const create =
  <T>(model: Model<T>) =>
  async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const body = { ...req.body } as T;
    
    if(body["board"]){
      try{
        const exist = await BoardModel.findById(`${body["board"]}`).lean().exec();
        if(exist == null){
          res.status(400).send({ok: false, msg: "The project selected does not exists"})
          return
        }
      }catch(error){        
        res.status(400).send(error)
      }
    }

    if(body["employees"]){
      try {
        const exist = await UserModel.findById(`${body["employees"]}`).lean().exec();
        if(exist == null){
          res.status(400).send({ok: false, msg: "The user selected does not exists"})
          return
        }
      } catch (error) {
        res.status(400).send(error)
      }
    }
    
    try {
      const doc = await model.create(body);
      const sanitizeDoc: T = doc.toObject();
      "password" in sanitizeDoc && delete sanitizeDoc["password"];

      res.status(200).send({ ok: true, data: sanitizeDoc });
    } catch (error) {
      res.status(400).send({ ok: false, msg: error.message });
    }
  };

const read =
  <T>(model: Model<T>) =>
  async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    try {
      const doc = await model.findById(id, "-password").lean().exec();
      res.status(200).send({ ok: true, data: doc });
    } catch (error) {
      console.log(error);
      res.status(400).send({ ok: false, msg: "Element cannot be found" });
    }
  };

const readAll =
  <T>(model: Model<T>) =>
  async (_req: AuthRequest, res: Response, _next: NextFunction) => {
    try {
      const doc = await model.find({}, "-password").lean().exec();
      res.status(200).send({ ok: true, data: doc });
    } catch (error) {
      res.status(400).send({ ok: false, msg: "Elements cannot be found" });
    }
  };

const urlProfilePictureCloudinary = async <T>(imageInfo: string, body:T) => {
    const cloudInfo = await cloudinaryAuth.uploader.upload(imageInfo, {
      upload_preset: 'photos'
    },function(_error, result) {
      body["profilePicture"] = result.secure_url;
      return body;
    }); 
    return cloudInfo;         
}

const update =
  <T>(model: Model<T>) =>
  async (req: AuthRequest, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const body = { ...req.body } as T;
    
    try {
      const fileImage = req.body?.profilePicture;

      if(fileImage != undefined && fileImage != ""){
        const dataBody = await urlProfilePictureCloudinary(req.body?.profilePicture,body);
        body["profilePicture"] = dataBody.secure_url;
      }

      const doc = await model
        .findByIdAndUpdate(id, { $set: { ...body } }, { new: true })
        .lean()
        .exec();

      "password" in doc && delete doc["password"];

      res.status(200).send({ ok: true, data: doc });
    } catch (error) {
      res.status(400).send({ ok: false, msg: "Element cannot be updated" });
    }
  };

const remove =
  <T>(model: Model<T>) =>
  async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    try {
      const doc = await model.findByIdAndDelete(id);
      res.status(200).send({ ok: true, msg: "Element deleted succesfully" });
    } catch (error) {
      res.status(400).send({ ok: false, msg: "Element cannot be deleted" });
    }
  };

export { create, read, update, remove, readAll };
