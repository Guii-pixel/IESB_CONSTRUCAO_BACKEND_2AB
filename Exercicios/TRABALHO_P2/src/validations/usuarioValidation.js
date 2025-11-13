import * as yup from "yup";

export const usuarioSchemaYup = yup.object().shape({
  email: yup.string().required().email(),
  senha: yup.string().required().min(6),
  role: yup.string().oneOf(["admin","professor","aluno"]).required()
});