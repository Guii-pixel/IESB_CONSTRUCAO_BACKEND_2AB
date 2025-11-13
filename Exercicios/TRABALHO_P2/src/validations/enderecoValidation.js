import * as yup from "yup";
import { isObjectId } from "./_helpers.js";

export const enderecoSchemaYup = yup.object().shape({
  rua: yup.string().required().min(2),
  numero: yup.string().required(),
  complemento: yup.string(),
  bairro: yup.string(),
  cidade: yup.string().required(),
  estado: yup.string().required().length(2),
  cep: yup.string().required().matches(/^\d{8}$/)
});