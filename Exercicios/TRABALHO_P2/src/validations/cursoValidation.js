import * as yup from "yup";
export const cursoSchemaYup = yup.object().shape({
  nome: yup.string().required().min(3),
  descricao: yup.string().max(500),
  duracaoSemestres: yup.number().integer().min(1)
});