// models/LaporanVilla.js
import { DataTypes } from "sequelize";
import { postgres } from "../../config/postgres";

const roi = postgres.define("roi", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  villaId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  okupasi: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  tarifHarian: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  pendapatanKotor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  biayaOperasional: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  pendapatanBersih: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  roi: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "roi", // sesuaikan dengan nama tabel di DB
  timestamps: false,          // karena cuma ada createdAt (tanpa updatedAt)
});

export default roi;
