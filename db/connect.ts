import mongoose , {Mongoose} from "mongoose";

const MONGO_URI = process.env.MONGO_ATLAS_URI || "";

function connect() : Promise<Mongoose> {
  console.log(process.env.MONGO_ATLAS_URI)
  return mongoose.connect(MONGO_URI);
}

export default connect
