import * as yup from "yup";
import mongoose from "mongoose";

export const alunoSchemaYup = yup.object().shape({
  nome: yup.string().required().min(3),
  email: yup.string().email().required(),
  cpf: yup.string().matches(/^\d{11}$/).required(),
  dataNascimento: yup.date().required(),
  curso_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  turma_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  endereco_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v))
});