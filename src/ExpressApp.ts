import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class ExpressApp {
    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
      this.express = express();
      this.middleware();
      this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
      this.express.use(logger('dev'));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
      /* This is just to get up and running, and to make sure what we've got is
       * working so far. This function will change when we start to add more
       * API endpoints */
      let router = express.Router();
      // placeholder route handler
      router.get('/api/v1/promatches', async (req, res, next) => {
        let response = await axios.get('https://api.opendota.com/api/proMatches');
        res.send(response.data);
      });
      this.express.use('/', router);
    }
}

export default new ExpressApp().express;
