import should from 'should';
import request from 'supertest';
import appPromise from 'src/server';


appPromise.then((app) => {
  describe('API', () => {
    it('GET / returns a welcome message', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);

          res.body.should.eql({
            message: 'Welcome to Duka API. Query products quickly. Keep track of all our products.',
          });

          done();
        });
    });
    
    it('POST / returns a message', (done) => {
      request(app)
        .post('/')
        .set('Accept', 'application/json')
        .send({ to: 'someone' })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);

          res.body.should.eql({ status: 'ok', message: 'hello someone!' });

          done();
        });
    });
  });
});
