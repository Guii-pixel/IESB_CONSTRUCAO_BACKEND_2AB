import * as yup from "yup";
import { idValidator } from "./IDValidator.js";

export const funcionarioCreateSchema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  email: yup.string().email("Formato de e-mail inválido").required("E-mail é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  dataContratacao: yup.date().required("Data de contratação é obrigatória"),
  dataNascimento: yup.date().required("Data de nascimento é obrigatória"),
  genero: yup.string().required("Gênero é obrigatório"),
  cargo: idValidator.required("ID do cargo é obrigatório"),
  departamento: idValidator.required("ID do departamento é obrigatório"),
  endereco: yup.object().shape({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string()
  })
});

export const funcionarioUpdateSchema = yup.object().shape({
  nome: yup.string(),
  email: yup.string().email("Formato de e-mail inválido"),
  telefone: yup.string(),
  genero: yup.string()
});
