const { User } = require('./user.class');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');

module.exports = function (app) {
  //options from https://github.com/feathersjs-ecosystem/feathers-sequelize#serviceoptions
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user', new User(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user');

  service.hooks(hooks);
};
