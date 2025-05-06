import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for the User document
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

// Mongoose schema definition
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export default mongoose.model<IUser>("User", UserSchema);
