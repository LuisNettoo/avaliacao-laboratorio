import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"
import { api } from "../../services/api"
import { GlobalStyles } from "../../styles/global"

function CreateUser() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

  const navigate = useNavigate()

  function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    api.post("salvar_usuario", {
      nome: name,
      telefone: phone,
      cpf,
      estado: state,
      cidade: city,
    }).then(() => {
      setName("")
      setPhone("")
      setCpf("")
      setState("")
      setCity("")

      navigate("/")
    })


  }

  return (
    <>
      <Container>
        <form onSubmit={handleCreateUser}>
          <h1>Criar Novo Usuario</h1>
          <label>
            Nome Completo*:
            <input 
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </label>
          <label>
            Telefone*:
            <input 
              type="text"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              required
              min={11}
            />
          </label>
          <label>
            CPF*:
            <input 
              type="text"
              value={cpf}
              onChange={event => setCpf(event.target.value)}
              required 
            />
          </label>
          <label>
            Estado*:
            <input 
              type="text"
              value={state}
              onChange={event => setState(event.target.value)}
              required 
            />
          </label>
          <label>
            Cidade*:
            <input 
              type="text"
              value={city}
              onChange={event => setCity(event.target.value)}
              required 
            />
          </label>
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