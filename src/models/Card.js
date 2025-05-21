import { DataTypes } from 'sequelize'
import sequelize from '../../config/db.js'

const Card = sequelize.define(
  'Card',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    icon: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    percentage: { type: DataTypes.DECIMAL(3, 2), allowNull: false },
    active: { type: DataTypes.BOOLEAN, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    tableName: 'cards',
    timestamps: true
  }
)

export default Card
