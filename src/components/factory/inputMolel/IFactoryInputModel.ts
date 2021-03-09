import { ObjectID } from "typeorm";

export interface IFatctoryInputModel {
  id: ObjectID;
  externalId: string;
  channelName: string;
  customerId: string;
  type: boolean;
  valid: boolean;
}