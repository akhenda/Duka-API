import should from 'should';
import request from 'supertest';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';

import Product from 'src/models/Product';
import appPromise from 'src/server';


const mockgoose = new Mockgoose(mongoose);

appPromise.then((app) => {
  describe('Products API', () => {
    before((done) => {
      mockgoose.prepareStorage().then(() => {
        mongoose.connect('mongodb://example.com/TestingDB', done);
      });
    });

    after((done) => {
      mockgoose.helper.reset().then(() => {
        done();
      });
    });

    it('GET /products/:id gives an object of the queried product, the one we will add here', (done) => {
      const createdAt = '2018-03-09T00:35:26.161Z';
      const updatedAt = '2018-03-09T00:35:26.161Z';
      const rice = new Product({
        _id: '5aa19e197eb2d8affb42f448',
        name: '5Kg Ranee Long Grain Rice',
        price: 546,
        image: 'https://example.com/image.jpg',
        category: 'food',
        createdAt,
        updatedAt,
      });

      rice.save().then(() => {
        request(app)
          .get('/products/5aa19e197eb2d8affb42f448')
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);

            res.body.should.eql({
              __v: 0,
              _id: '5aa19e197eb2d8affb42f448',
              name: '5Kg Ranee Long Grain Rice',
              price: 546,
              image: 'https://example.com/image.jpg',
              category: 'food',
              slug: '5kg-ranee-long-grain-rice',
              createdAt,
              updatedAt,
            });

            done();
          });
      });
    });
  });
});
