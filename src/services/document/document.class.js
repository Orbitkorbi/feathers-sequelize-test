const { Service } = require('feathers-sequelize');

exports.Document = class Document extends Service {
  create(data, params) {
    const { name, uid, fid } = data;  
    const documentData = {
      name,
      'userId': uid,
      'formularId': fid
    };
    return super.create(documentData, params);
  }

  update(id, data, params){
    return super.update(id, data, params);
  }

  remove(id, params){
    return super.remove(id, params);
  }
};
