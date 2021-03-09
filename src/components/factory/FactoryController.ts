import { FactoryRepository } from "../../repository/factory.repository";
import { IFactoryApiControllerOptions } from "./IFactoryControllerOptions";
import { IFatctoryInputModel } from "./inputMolel/IFactoryInputModel";

export class FactoryController {

    private factoryRepository: FactoryRepository;
    constructor(options?: IFactoryApiControllerOptions) {
        this.factoryRepository = (options && options.factoryRepository)  || new FactoryRepository()
    }
    public async getFactory() {
        try {
            const result: IFatctoryInputModel[] = await this.factoryRepository.find()
            return {
                data : result
            };
        } catch (error) {
            throw(error)
        }
    }

    public async saveFactory(data: any) {
        try {            
            const result: IFatctoryInputModel = await this.factoryRepository.save(data)
        } catch (error) {
            throw (error)
        }
    }
}

