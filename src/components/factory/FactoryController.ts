import { FactoryRepository } from "../../repository/factory.repository";
import { IFactoryApiControllerOptions } from "./IFactoryControllerOptions";
import { IFatctoryInputModel } from "./inputMolel/IFactoryInputModel";
import axios, { AxiosResponse } from 'axios';
export class FactoryController {

    private factoryRepository: FactoryRepository;
    constructor(options?: IFactoryApiControllerOptions) {
        this.factoryRepository = (options && options.factoryRepository) || new FactoryRepository()
    }
    public async getFactory(params) {
        try {
            // const result: IFatctoryInputModel[] = await this.factoryRepository.find()
            // return {
            //     data: result
            // };
            const daprPort = process.env.DAPR_HTTP_PORT || 3500;
            const stateStoreName = `statestore`;
            const stateUrl = `http://localhost:${daprPort}/v1.0/state/${stateStoreName}`;
            const result = await axios({
                url: `${stateUrl}/${params.id}`,
                method: "GET",
                params: {},
                headers: { "Content-Type": "application/json" }
            })
            if(result.data) {
                    console.log("Successfully retrieved persisted state.")
                    return { data: { status: 200, result: result.data, message: "Successfully persisted state" } };
            } else {
                    return result;
            }
        } catch (error) {
            throw (error)
        }
    }

    public async saveFactory(inputValue: any) {
        try {
            // const result: IFatctoryInputModel = await this.factoryRepository.save(data)
            const daprPort = process.env.DAPR_HTTP_PORT || 3500;
            const stateStoreName = `statestore`;
            const stateUrl = `http://localhost:${daprPort}/v1.0/state/${stateStoreName}`;
            const state = [{
                key: inputValue.orderId,
                value: inputValue,
            }];
            const result = await axios({
                url: stateUrl,
                method: "POST",
                data: JSON.stringify(state),
                headers: { "Content-Type": "application/json" }
            })
            if(result.data) {
                console.log("State saved.")
                return { data: { status: 200, message: "Successfully persisted state" } };
            } else {
                return result;
            }
        } catch (error) {
            throw (error)
        }
    }

    public async getStore(params) {
        try {
            const daprPort = process.env.DAPR_HTTP_PORT || 3500;
            const stateStoreName = `statestore`;
            const stateUrl = `http://localhost:${daprPort}/v1.0/state/${stateStoreName}`;
            const result = await axios({
                url: `${stateUrl}/${params.id}`,
                method: "GET",
                params: {},
                headers: { "Content-Type": "application/json" }
            })
            if(result.data) {
                    console.log("Successfully retrieved persisted state.")
                    return { data: { status: 200, result: result.data, message: "Successfully persisted state" } };
            } else {
                    return result;
            }

        } catch (error) {

        }
    }
}

