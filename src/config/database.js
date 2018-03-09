import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const db = process.env.NODE_ENV === 'production' ? 'PROD_DB' : 'TEST_DB';

export default () => {
  return mongoose.connect(process.env[db]);
};
