import { MdPersonAddAlt1 } from "react-icons/md";
import { Link } from "react-router-dom"

import { Container } from "../Header/styles"

function Header() {
  return (
    <Container>
      <h1>Clientes</h1>
      <Link to={"/criar_usuario"}>
        <MdPersonAddAlt1 /> Novo Cliente
      </Link>
    </Container>
  )
}

export default Header