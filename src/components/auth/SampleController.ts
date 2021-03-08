/**
 * Keyclock controller
 */

export class SampleController {
    /**
     * 
     * @param code 
     */
    public getSampleData() {
        try {
     
            return {
                data : {text:'sample data'}
            };
        } catch (err) {
            throw(err)
        }
    }

}
