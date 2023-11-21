import { useState, useEffect } from "react"

import { Container } from "./styles"
import { api } from "../../services/api";
import UserRow from "../UserRow";

interface User {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  estado: string;
  cidade: string;
}

function Dashboard() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get("/buscar").then(response => {
      setUsers(response.data)
    })
  }, [])

  async function deleteUser(id: number) {
    await api.delete(`/deletar/${id}`)
    
    api.get("/buscar").then(response => {
      setUsers(response.data)
    })
  }

  return (
    <Container>
      <table>
        <thead>
          <th>Nome</th>
          <th>Telefone</th>
          <th>CPF</th>
          <th>Estado</th>
          <th>Cidade</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow 
              key={user.id}
              id={user.id}
              nome={user.nome}
              telefone={user.telefone}
              cpf={user.cpf}
              estado={user.estado}
              cidade={user.cidade}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Dashboard