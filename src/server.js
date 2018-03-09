// import dependencies
import dotenv from 'dotenv';
import express from 'express';

// import configs
import dbConfig from 'src/config/database';
import expressConfig from 'src/config/express';

// import our routes
import index from 'src/routes';
import products from 'src/routes/products';

dotenv.config();

const app = express();
const setups = [expressConfig, dbConfig];
const startUp = setups.map(setup => setup(app));

const appPromise = Promise.all(startUp).then(() => {
  app.use('/', index);
  app.use('/products', products);
  return app;
});

export default appPromise;
