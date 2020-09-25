const user = require('./user/user.service.js');
const document = require('./document/document.service.js');
const formular = require('./formular/formular.service.js');
const formgroup = require('./formgroup/formgroup.service.js');
const field = require('./field/field.service.js');
const fieldvalue = require('./fieldvalue/fieldvalue.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(document);
  app.configure(field);
  app.configure(fieldvalue);
  app.configure(formgroup);
  app.configure(formular);
};
