const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const formgroup = sequelizeClient.define('formgroup', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
    name: {
      plural: 'formgroups'
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
  formgroup.associate = function (models) {
    formgroup.belongsTo( models['formular'] );
    formgroup.hasMany( models['field'] );
  };

  return formgroup;
};
