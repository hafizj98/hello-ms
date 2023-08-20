const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../'); // Import your app
const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
    it('should return "Rollback success" on the root path', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Rollback success');
                done();
            });
    });

    it('should return "Healthy" on the /health path', (done) => {
        chai.request(app)
            .get('/health')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Healthy');
                done();
            });
    });

    it('should return "Ready" on the /ready path', (done) => {
        chai.request(app)
            .get('/ready')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Ready');
                done();
            });
    });
});
