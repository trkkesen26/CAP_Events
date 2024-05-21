using { sap.training as db } from '../db/data-models';

service FactoryHRService @(path:'/factory/hr') {
    /**
     * Sync events
     */
     entity Personnels as projection on db.Personnels;
     entity Departments as projection on db.Departments;

    /**
     * Async events
     */
    event NewPersonnel : {
        name: String(128);
        departmentName: String(256);
    }
}