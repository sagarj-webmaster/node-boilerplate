import * as express from 'express';
import { factoryRoutes } from './components/factory/FactoryRoutes';

export function registerRoutes(app: express.Express): any {

    const router: any = express.Router();
    app.use('/', router);
    factoryRoutes(app, router);
}
