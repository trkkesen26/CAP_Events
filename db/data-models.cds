namespace sap.training;
using { cuid } from '@sap/cds/common';

entity Personnels : cuid {
    name:String(128);
    surName:String(64);
    departmentID : UUID;
    toDepartment: Association to one Departments on toDepartment.ID = $self.departmentID;
}

entity Departments : cuid {
    name: String(256);
    location: String(512);
    toPersonnels : Composition of many Personnels on toPersonnels.toDepartment = $self;
}