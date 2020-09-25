const { Service } = require('feathers-sequelize');

exports.User = class User extends Service {
  
  get(id, params){
    return super.get(id, params);
  }
  
  create(data, params) {
    const { name, image_filename } = data;
    const userData = {
      name,
      imagefilename: image_filename
    };
    return super.create(userData, params);
  }

  update(id, data, params){
    return super.update(id, data, params);
  }

  remove(id, params){
    return super.remove(id, params);
  }
};
