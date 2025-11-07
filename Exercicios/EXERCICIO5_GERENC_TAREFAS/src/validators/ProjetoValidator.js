import * as yup from "yup";

export const projetoCreateSchema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  descricao: yup.string().required("Descrição é obrigatória"),
  dataInicio: yup.date().required("Data de início é obrigatória"),
  dataFim: yup.date()
    .required("Data de fim é obrigatória")
    .min(yup.ref("dataInicio"), "Data fim deve ser posterior à data início")
});

export const projetoUpdateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date().min(yup.ref("dataInicio"), "Data fim deve ser posterior à data início")
});
