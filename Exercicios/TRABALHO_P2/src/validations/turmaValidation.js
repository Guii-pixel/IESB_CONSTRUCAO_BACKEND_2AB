import * as yup from "yup";
import mongoose from "mongoose";

export const turmaSchemaYup = yup.object().shape({
  nome: yup.string().required().min(1),
  ano: yup.number().required().min(2000),
  curso_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  professor_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v))
});