
const hydrate = require('feathers-sequelize/hooks/hydrate');

const includeFormgroups = async context => {
  const { app, method, result, params } = context;

  const sequelize = app.get('sequelizeClient');
  const { formgroup, field } = sequelize.models;

  const association = {
    include: [ { model: formgroup } ]
  };
  const association2 = {
    include: [
      { 
        association: { model: formgroup },
        include: [ {model: field } ]
      }
    ]
  };
  const association3 = {
    include: [
      { 
        model: formgroup,
        include: [ {model: field } ]
      }
    ]
  };

  switch( context.type ) {
    case 'before':
      context.params.sequelize = Object.assign(association, { raw: false });
      return Promise.resolve(context);
      break;

    case 'after':
      hydrate( association ).call(this, context);
      break;

    case 'create':
      context.params.sequelize = {
        raw: false,
        nest: true,
        include: [
          { 
            association: 'Formular.Formgroup',
            include: [ {model: field } ]
          }
        ]
      };
      break;
  }
  return context;
};



const addGroups = async context => {
  const { app, method, result, data, params } = context;
  const FormgroupService = app.service('formgroup');
  const { groups } = data;
  groups.forEach(group => {
    if( group.id != null ){
      //FormgroupService.update(group);
      console.log(`formgroup ${group.name} already has Id -> therefore only update existing record`);
    }else{
      FormgroupService.create(group);
    }
  });
  
  return context;
};

module.exports = {
  before: {
    all: [ includeFormgroups ],
    find: [],
    get: [  ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ includeFormgroups ],
    find: [],
    get: [  ],
    create: [  ],
    update: [  ],
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
