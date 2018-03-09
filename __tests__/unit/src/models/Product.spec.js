import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import { expect } from 'chai';

import Product from 'src/models/Product';


const mockgoose = new Mockgoose(mongoose);

describe('Product Model', () => {
  before((done) => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://example.com/TestingDB', done);
    });
  });

  after((done) => {
    // mockgoose.reset(done);
    mockgoose.helper.reset().then(() => {
      done();
    });
  });

  it('should be retrieved after saved', () => {
    const user = new Product({
      name: 'Omo', price: 129, image: '', category: 'Detergent', 
    });

    return user.save()
      .then(() => Product.find()
        .then((users) => {
          expect(users).not.to.be.equal(undefined);
          expect(users.length).to.be.equal(1);
          expect(users[0]).to.be.have.property('name', 'Omo');
        }));
  });
});
