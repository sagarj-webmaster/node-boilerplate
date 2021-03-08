import * as express from 'express';
import { sampleRoutes } from './components/auth/SampleRoutes';

export function registerRoutes(app: express.Express): any {

    const sampleRouter: any = express.Router();
    app.use('/sample', sampleRouter);
    sampleRoutes(app, sampleRouter);

}
