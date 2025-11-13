import * as yup from "yup";
import mongoose from "mongoose";

export const matriculaSchemaYup = yup.object().shape({
  aluno_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  turma_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  dataMatricula: yup.date()
});