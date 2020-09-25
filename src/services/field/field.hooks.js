

const addFields = async context => {
  const { app, method, result, data, params } = context;
  const FieldService = app.service('field');
  const { fields } = data;
  fields.forEach(field => {
    if( field.id != null ){
      //FieldService.update(field);
      console.log(`field ${field.name} has already an Id -> therefore update`);
    }else{
      FieldService.create(field);
    }
  });
  
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
