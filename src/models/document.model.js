const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const document = sequelizeClient.define('document', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    name: {
      plural: 'documents'
    }
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  document.associate = function (models) {
    document.hasMany( models['fieldvalue'] );
    document.belongsTo( models['user'] );
    document.belongsTo( models['formular'] );
  };

  return document;
};
