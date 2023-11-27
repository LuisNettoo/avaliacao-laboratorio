import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { object, string, } from "yup"


import { Container } from "./styles"
import { api } from "../../services/api"
import { GlobalStyles } from "../../styles/global"

const schema = object({
  name: string().required("É necessário informar seu nome completo."),
  phone: string().required("É necessário informar seu telefone.").min(11, "Um número de telefone tem 11 digitos").max(11, "Telefone inválido"),
  cpf: string().required("É necessário informar um CPF.").min(11, "Um CPF tem exatamente 11 digitos").max(11, "CPF inválido"),
  state: string().required("É necessário informar seu estado.").min(4, "Um estado tem pelo menos 4 caracters"),
  city: string().required("É necessário informar sua cidade."),
})

function CreateUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)})
  
  const navigate = useNavigate()

  function onSubmit(data: any) {
    api.post("salvar_usuario", {
      nome: data.name,
      telefone: data.phone,
      cpf: data.cpf,
      estado: data.state,
      cidade: data.city,
    }).then(() => {
      navigate("/")
    })

  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Criar Novo Usuario</h1>
          <div>
            <label>Nome Completo*:</label>
            <input 
              type="text"
              {...register("name")}
            />
            <span>{errors?.name?.message}</span>
          </div>
          <div>
            <label>Telefone*</label>
            <input 
              type="text"
              {...register("phone")}
            />
            <span>{errors?.phone?.message}</span>
          </div>
          <div>
            <label>CPF*:</label>
            <input 
              type="text"
              {...register("cpf")}
            />
            <span>{errors?.cpf?.message}</span>
          </div>
          <div>
            <label>Estado*:</label>
            <input 
              type="text"
              {...register("state")}
            />
            <span>{errors?.state?.message}</span>
          </div>
          <div>
            <label>Cidade*:</label>
            <input 
              type="text"
              {...register("city")}
            />
            <span>{errors?.city?.message}</span>
          </div>
          <button type="submit">
            Enviar
          </button>
        </form>
      </Container>
      <GlobalStyles />
    </>
    
  )
}

export default CreateUser