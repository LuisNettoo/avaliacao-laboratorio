import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { GlobalStyles } from "../../styles/global";
import { Container } from "../CreateUser/styles";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface User {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  estado: string;
  cidade: string;
}

const schema = object({
  name: string().required("É necessário informar seu nome completo."),
  phone: string().required("É necessário informar seu telefone.").min(11, "Um número de telefone tem 11 digitos").max(11, "Telefone inválido"),
  cpf: string().required("É necessário informar um CPF.").min(11, "Um CPF tem exatamente 11 digitos").max(11, "CPF inválido"),
  state: string().required("É necessário informar seu estado.").min(4, "Um estado tem pelo menos 4 caracters"),
  city: string().required("É necessário informar sua cidade."),
})

function EditUser() {
  const { id } = useParams()
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    telefone: "",
    cpf: "",
    estado: "",
    cidade: "",
  })

  useEffect(() => {
    api.get("/buscar").then(response => {
      const users = response.data
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(id)) {
          setUser(users[i])
        }
      }
    })
  },[])
  
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})
  
  const navigate = useNavigate()

  function onSubmit(data: any) {
    api.put(`/editar/${id}`, {
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
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h1>Editar Usuario</h1>
          <div>
            <label>Nome Completo*:</label>
            <input 
              type="text"
              {...register("name")}
              defaultValue={user.nome}
            />
            <span>{errors?.name?.message}</span>
          </div>
          <div>
            <label>Telefone*</label>
            <input 
              type="text"
              {...register("phone")}
              defaultValue={user.telefone}
            />
            <span>{errors?.phone?.message}</span>
          </div>
          <div>
            <label>CPF*:</label>
            <input 
              type="text"
              {...register("cpf")}
              defaultValue={user.cpf}
            />
            <span>{errors?.cpf?.message}</span>
          </div>
          <div>
            <label>Estado*:</label>
            <input 
              type="text"
              {...register("state")}
              defaultValue={user.estado}
            />
            <span>{errors?.state?.message}</span>
          </div>
          <div>
            <label>Cidade*:</label>
            <input 
              type="text"
              {...register("city")}
              defaultValue={user.cidade}
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

export default EditUser