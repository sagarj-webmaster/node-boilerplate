import axios from 'axios';
import { getInvokeUrl, getStateUrl } from "../../helpers/util";
export class FactoryController {

    public async GetCustomerByExtId(inputValue) {
        try {
            const EntityAppUrl = await getInvokeUrl()
            console.log(EntityAppUrl + '/getEntity');            
            const result = await axios({
                url: `${EntityAppUrl}/getEntity`,
                method: "GET",
                params: {},
                data: JSON.stringify(inputValue),
                headers: { "Content-Type": "application/json" }
            })
            if(result.data) {
                    return { data: { status: 200, result: result.data, message: "Successfully persisted state" } };
            } else {
                    return result;
            }
        } catch (error) {
            throw (error)
        }
    }

    public async getFactory(inputValue) {
        try {
            const stateUrl = await getStateUrl()
            const result = await axios({
                url: `${stateUrl}/${inputValue.id}`,
                method: "GET",
                params: {},
                data: JSON.stringify(inputValue),
                headers: { "Content-Type": "application/json" }
            })
            if(result.data) {
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
            const stateUrl = await getStateUrl()
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
                return { data: { status: 200, message: "Successfully persisted state" } };
            } else {
                return result;
            }
        } catch (error) {
            throw (error)
        }
    }
}
