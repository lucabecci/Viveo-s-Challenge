import { Schema, model, Document } from "mongoose";

interface IOperation extends Document {
  operation: string;
}

const operationSchema: Schema = new Schema(
  {
    operation: {
      type: String,
      required: true,
      trim: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IOperation>("Operation", operationSchema);
