import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const TopSelling = sequelize.define(
  'TopSelling',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    preview: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    sold: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    tableName: 'topSellings',
    timestamps: true
  }
)

export default TopSelling
