const { Service } = require('feathers-sequelize');

/**
   * Formular class
   *
   * @var formgroupModel
   * @var fieldModel
   *
   */
exports.Formular = class Formular extends Service {

  get(id, params){
    /*
    params.sequelize = {
      raw: false,
      nest: true,
      include: [{
        model: this.formgroup
      }]
    };
    */
    return super.get(id, params);
  }

  create(data, params) {
    /*
    params.sequelize = {
      raw: false,
      logging: console.log,
      include: [
        { 
          association: this.db.model('formgroup'),
          include: [ { model: this.db.model('field') } ]
        }
    ]
    };
    */
    return super.create(data, params);
  }

  update(id, data, params){
    return super.update(id, data, params);
  }

  //hurts SR Principle but ok for this
  createGroups(groups){
    groups.forEach(group => {
      console.log("Cur ID "+this.id);
      if( group.id != null ){
        //update existing group
        console.log("Update: "+group.id+" "+group.name);
        this.formgroupModel.update(group.id, { name: group.name } );
      }else{
        //create group
        console.log("New: "+group.id+" "+group.name);
        this.formgroupModel.create( { name: group.name } );
      }
      let currentGroupId = group.id;
      //create Fields for the current group
      this.createFields(group.fields, currentGroupId);
    });
  }
  createFields(fields, currentGroupId){
    fields.forEach(field => {
      if( field.id != null ){
        //update existing field
        console.log("Update: "+field.id+" "+field.name);
        this.fieldModel.update(field.id, { name: field.name } );
      }else{
        //create field
        console.log("New: "+field.id+" "+field.name);
        this.fieldModel.create( { name: field.name } );
      }
    });
  }


};
