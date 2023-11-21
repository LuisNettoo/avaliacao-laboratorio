import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

import { formatCPF, formatPhoneNumber } from "../../services/format";
import { Container } from "./styles"

interface UserRowProps {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  estado: string;
  cidade: string;
  deleteUser: (id: number) => void;
}

function UserRow({ id, nome, telefone, cpf, estado, cidade, deleteUser }: UserRowProps) {
  
  function handleDeleteUser(event: React.FormEvent) {
    event.preventDefault()
    deleteUser(id)
  }

  return (
    <Container>
        <td>{nome}</td>
        <td>{formatPhoneNumber(telefone)}</td>
        <td>{formatCPF(cpf)}</td>
        <td>{estado}</td>
        <td>{cidade}</td>
        <td>
          <button>
            <RiPencilFill />
          </button>
          <button onClick={handleDeleteUser}>
            <FaTrash />
          </button>
        </td>
    </Container>
  )
}

export default UserRow