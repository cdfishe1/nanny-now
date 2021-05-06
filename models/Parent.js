const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Parent extends Model {
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

Parent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nanny_id: {
      type: DataTypes.STRING,
      references: {
        model: "nanny",
        key: "id",
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newParent) {
        newParent.password = await bcrypt.hash(newParent.password, 10);
        return newParent;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "parent",
  }
);

module.exports = Parent;
