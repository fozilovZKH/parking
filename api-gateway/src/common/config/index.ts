import * as dotenv from 'dotenv';
import { IConfig } from './interfaces/config.interface';
dotenv.config();

export const config: IConfig = {
  serverPort: Number(process.env.SERVER_PORT),
  filePort: process.env.FILE_SERVICE_PORT,
  parkPort: process.env.PARK_SERVICE_PORT,
  transactionPort: process.env.TRANSACTION_SERVICE_PORT,
  userPort: process.env.USER_SERVICE_PORT,
  redisHost: process.env.REDIS_HOST,
  redisPort: Number(process.env.REDIS_PORT),
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpiredIn: process.env.JWT_EXPIRED_IN,
};
