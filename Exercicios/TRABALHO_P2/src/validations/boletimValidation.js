import * as yup from "yup";
import mongoose from "mongoose";

export const boletimSchemaYup = yup.object().shape({
  aluno_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  curso_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  mediaFinal: yup.number().required().min(0).max(10)
});