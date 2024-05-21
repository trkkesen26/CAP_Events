const cds = require ('@sap/cds')

module.exports = class FactoryHRService extends cds.ApplicationService {
    async init() {

        this.on("CREATE", "Personnels", async (req, next) => {
            const db = await cds.connect.to("db");
            const { Departments } = db.entities;
            let { ID, name, location } = await db.run(SELECT.one(Departments).columns('name').where({ ID: req.data.departmentID }));
            let personnelName = req.data.name;
            if (name) {
                await this.emit('NewPersonnel', { personnelName, name });
            }
            return next();
        });

        this.on("NewPersonnel", (req, res) => {
            console.log(`Personnel has been emitted with ${req.data.personnelName} named in ${req.data.name} department.`);
        });

        return super.init();
    }
}