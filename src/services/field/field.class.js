const { Service } = require('feathers-sequelize');

exports.Field = class Field extends Service {
  get(id, params){
    
  }

  create(data, params) {
    return super.create(data, params);
  }

  update(id, data, params){
    return super.update(id, data, params);
  }
};
