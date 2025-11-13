import * as yup from "yup";
import mongoose from "mongoose";

export const avaliacaoSchemaYup = yup.object().shape({
  aluno_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  disciplina_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  nota: yup.number().required().min(0).max(10),
  presenca: yup.number().required().min(0).max(100)
});