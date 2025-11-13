import * as yup from "yup";

export const enderecoSchemaYup = yup.object().shape({
  rua: yup.string().required("A rua é obrigatória").min(2, "A rua deve ter pelo menos 2 caracteres"),
  numero: yup.string().required("O número é obrigatório"),
  complemento: yup.string().nullable(),
  bairro: yup.string().nullable(),
  cidade: yup.string().required("A cidade é obrigatória"),
  estado: yup
    .string()
    .required("O estado é obrigatório")
    .length(2, "O estado deve ter exatamente 2 letras"),
  cep: yup
    .string()
    .required("O CEP é obrigatório")
    .matches(/^\d{8}$/, "O CEP deve conter exatamente 8 dígitos numéricos")
});