const cds = require ('@sap/cds')

module.exports = class EventReceiver extends cds.ApplicationService {
    async init() {
        const FcService = await cds.connect.to ('FactoryHRService')

        FcService.on ('NewPersonnel', (oMessage) => {
            /**
             * Do something you want.
             */
            console.log(`Emitted event has been received.`);
        })

        return super.init();
    }
}