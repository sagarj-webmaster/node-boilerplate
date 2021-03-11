import { CONSTANTS } from "../constants";

export const getStateUrl = async() => `http://localhost:${CONSTANTS.DAPR_PORT}/v1.0/state/${CONSTANTS.STATE_STORE_NAME}`;

export const getInvokeUrl = async() => `http://localhost:${CONSTANTS.DAPR_PORT}/v1.0/invoke/${CONSTANTS.ENTITY_APP_ID}/method`;