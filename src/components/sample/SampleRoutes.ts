import * as express from 'express';
import {
    StatusCodes,
} from 'http-status-codes';
import { SampleController } from './SampleController';
import * as ResponseHandler from "../../helpers/response.handler";

export function sampleRoutes(app: express.Express, router: any) : any {



    const auth = async (request: any, response: express.Response, next: any) => {
        try {
            const controller: SampleController = new SampleController();
            const result: any = await controller.getSampleData();
            response.locals.data = result.data;
            ResponseHandler.JSONSUCCESS(request, response);

        } catch (err) {
            response.locals.errorCode = StatusCodes.UNAUTHORIZED;
            response.locals.errors = err.message;
            response.locals.error = err;
            ResponseHandler.JSONERROR(request, response);
        }
    }


    router.get('/', auth);
}
