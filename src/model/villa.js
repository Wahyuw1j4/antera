// models/Produk.js
import { DataTypes } from "sequelize";
import { postgres } from "../../config/postgres.js";

const Villa = postgres.define("Villa", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  harga: {
    type: DataTypes.DOUBLE, // sama dengan double precision
    allowNull: false,
  },
  lokasi: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: "villas",  // sesuaikan dengan nama tabel kamu di DB
  timestamps: true,      // otomatis pakai createdAt & updatedAt
});

export default Villa;
