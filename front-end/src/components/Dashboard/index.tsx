import { useState, useEffect } from "react"

import { Container } from "./styles"
import { api } from "../../services/api";
import { formatPhoneNumber, formatCPF } from "../../services/format"

interface User {
  idusuarios: number;
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


  return (
    <Container>
      <table>
        <thead>
          <th>Nome</th>
          <th>Telefone</th>
          <th>CPF</th>
          <th>Estado</th>
          <th>Cidade</th>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.idusuarios}> 
              <td>{user.nome}</td>
              <td>{formatPhoneNumber(user.telefone)}</td>
              <td>{formatCPF(user.cpf)}</td>
              <td>{user.estado}</td>
              <td>{user.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Dashboard