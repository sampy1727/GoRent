import mongoose, { Schema, Document } from 'mongoose';

// Define a TypeScript interface for the document
interface IProduct extends Document {
  name: string;
  Seller: string;
  Price: number;
}

// Define the schema
const productSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    Seller: {
      type: String,
      required: true,
    },
    Price: {
      type: Number, // ✅ use `Number` not `int`
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export default mongoose.model<IProduct>('Product', productSchema);
