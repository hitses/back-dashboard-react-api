import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const RecentSales = sequelize.define(
  'RecentSale',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING, allowNull: false },
    customer: { type: DataTypes.STRING, allowNull: false },
    product: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    tableName: 'recentSales',
    timestamps: true
  }
)

export default RecentSales
