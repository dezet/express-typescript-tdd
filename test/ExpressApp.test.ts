import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../src/ExpressApp';
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/v1/promatches', () => {
    it('should be json', () => {
        return chai
            .request(app)
            .get('/api/v1/promatches')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });
    it('should be array', () => {
        return chai
            .request(app)
            .get('/api/v1/promatches')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('there should be atleast 1 match info', () => {
        return chai
            .request(app)
            .get('/api/v1/promatches')
            .then(res => {
                let matchInfo = res.body.shift();
                expect(matchInfo).to.exist;
                expect(matchInfo).to.have.all.keys([
                    "match_id",
                    "duration",
                    "start_time",
                    "radiant_team_id",
                    "radiant_name",
                    "dire_team_id",
                    "dire_name",
                    "leagueid",
                    "league_name",
                    "series_id",
                    "series_type",
                    "radiant_win"
                ]);
            })
    });
});
