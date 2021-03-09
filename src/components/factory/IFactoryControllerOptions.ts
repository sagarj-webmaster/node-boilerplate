import { FactoryRepository } from "../../repository/factory.repository";

export interface IFactoryApiControllerOptions {
  factoryRepository: FactoryRepository

}
// add this logger once logger is set up logger?: Logger;