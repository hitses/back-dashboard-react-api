import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const RecentActivity = sequelize.define(
  'RecentActivity',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    time: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    highlight: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    tableName: 'recentActivities',
    timestamps: true
  }
)

export default RecentActivity
