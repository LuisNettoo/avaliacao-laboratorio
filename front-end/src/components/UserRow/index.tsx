import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

import { formatCPF, formatPhoneNumber } from "../../services/format";
import { Container } from "./styles"
import { Link } from "react-router-dom";

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
          <Link to={`/editar_usuario/${id}`}>
            <RiPencilFill />
          </Link>
          <button onClick={handleDeleteUser}>
            <FaTrash />
          </button>
        </td>
    </Container>
  )
}

export default UserRow