import chai from 'chai';
import mongoose from 'mongoose';
import chaiAsPromised from 'chai-as-promised';

require('dotenv').config();

chai.use(chaiAsPromised);
mongoose.Promise = global.Promise;
