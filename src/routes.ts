import * as express from 'express';
import { factoryRoutes } from './components/factory/FactoryRoutes';

export function registerRoutes(app: express.Express): any {

    const sampleRouter: any = express.Router();
    app.use('/sample', sampleRouter);
    factoryRoutes(app, sampleRouter);

}
