import * as yup from "yup";
import mongoose from "mongoose";

export const disciplinaSchemaYup = yup.object().shape({
  nome: yup.string().required().min(2),
  cargaHoraria: yup.number().required().min(1),
  curso_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v)),
  professor_id: yup.string().required().test("isObjectId", "ID inválido", v => mongoose.isValidObjectId(v))
});