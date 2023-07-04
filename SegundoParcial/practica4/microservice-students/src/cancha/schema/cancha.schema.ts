import * as mongoose from 'mongoose';

export const CanchaSchema = new mongoose.Schema(
  {
    descripcion: { type: String, required: true },

  },
  { timestamps: true },
);

