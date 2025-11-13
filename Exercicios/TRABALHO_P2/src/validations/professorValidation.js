import * as yup from "yup";
import mongoose from "mongoose";

export const professorSchemaYup = yup.object().shape({
  nome: yup.string().required().min(3),
  email: yup.string().email().required(),
  telefone: yup.string().matches(/^\d{10,11}$/).required(),
  endereco_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v))
});