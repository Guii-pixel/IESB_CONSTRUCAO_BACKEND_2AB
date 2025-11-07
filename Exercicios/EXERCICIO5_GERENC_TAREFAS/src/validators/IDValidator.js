import * as yup from "yup";
import mongoose from "mongoose";

export const idValidator = yup.string().test("valid-id", "ID inválido", (value) => {
  return mongoose.Types.ObjectId.isValid(value);
});