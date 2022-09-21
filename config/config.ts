import { GenericConfig } from "../types/config";
import dotenv from "dotenv";
import * as logger from "loglevel";

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

logger.enableAll();

const CONFIG: GenericConfig = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
      PRIVATE_KEY: process.env.JWT_SECRET_KEY,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.MONGO_ATLAS_URI,
    },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
      PRIVATE_KEY: process.env.JWT_SECRET_KEY,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.MONGO_ATLAS_URI,
    },
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
      PRIVATE_KEY: process.env.JWT_SECRET_KEY,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.MONGO_ATLAS_URI,
    },
  },
};

export default CONFIG[ENV];
