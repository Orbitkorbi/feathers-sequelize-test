const { Service } = require('feathers-sequelize');

exports.Formgroup = class Formgroup extends Service {
  
  constructor( modelOptions, app ){
    super(modelOptions, app);
    const sequelize = app.get('sequelizeClient');
    this.models = sequelize.models;
  }

  findAll(){
    params.sequelize = {
      raw: false,
      nest: true,
      include: [
        { model: this.models.field }
      ]
    };
    return super.findAll(params);
  }

  get(id, params){
    params.sequelize = {
      raw: false,
      nest: true,
      include: [
        { model: this.models.field }
      ]
    };
    return super.get(id, params);
  }

  create(data, params){
    params.sequelize = {
      include: [
        { model: this.models.field }
    ]
    };
    console.log("create formgroup");
    const { name } = data;
    return super.create(data, params);
  }

  update(id, data, params){
    console.log('formgroup geupdatet');
    return super.update(id, data, params);
  }
};
