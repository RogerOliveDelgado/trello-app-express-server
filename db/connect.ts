import mongoose , {Mongoose} from "mongoose";
import config from '../config/config'

const MONGO_URI = config.db.url || "";

function connect() : Promise<Mongoose> {
  return mongoose.connect(MONGO_URI);
}

export default connect
