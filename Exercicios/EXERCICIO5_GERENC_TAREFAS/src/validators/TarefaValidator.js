import * as yup from "yup";
import { idValidator } from "./IDValidator.js";

export const tarefaCreateSchema = yup.object().shape({
  titulo: yup.string().required("Título é obrigatório"),
  descricao: yup.string().required("Descrição é obrigatória"),
  dataInicio: yup.date().required("Data de início é obrigatória"),
  dataFim: yup.date()
    .required("Data de fim é obrigatória")
    .min(yup.ref("dataInicio"), "Data fim deve ser posterior à data início"),
  responsavel: idValidator.required("ID do funcionário é obrigatório"),
  projeto: idValidator.required("ID do projeto é obrigatório")
});

export const tarefaUpdateSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date().min(yup.ref("dataInicio"), "Data fim deve ser posterior à data início")
});
