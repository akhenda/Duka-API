import should from 'should';
import request from 'supertest';
import appPromise from 'src/server';


appPromise.then((app) => {
  describe('Products Endpoints', () => {
    it('GET /api/v1/products/seed seeds the DB with products', (done) => {
      request(app)
        .get('/api/v1/products/seed/')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          should.not.exist(err);
          
          res.body.should.eql({ status: 'ok', message: 'Database seeded!' });

          done();
        });
    });

    it('GET /api/v1/products/ returns a list of products', (done) => {
      request(app)
        .get('/api/v1/products?page=4')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);

          res.body.data.should.be.an.Array();
          res.body.meta.limit.should.eql(10);
          res.body.meta.page.should.eql(4);
          res.body.meta.pages.should.eql(7);

          done();
        });
    });
    
    it('GET /api/v1/products/2 returns a 404 error', (done) => {
      request(app)
        .get('/api/v1/products/2')
        .set('Accept', 'application/json')
        .send({ to: 'someone' })
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
          should.not.exist(err);

          res.status.should.eql(404);
          res.body.should.eql({ message: 'Product with id 2 not found' });

          done();
        });
    });
  });
});
