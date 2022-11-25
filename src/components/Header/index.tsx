import { Link } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";

import { Container, Content } from "./styles";
import logo from "../../assets/logoRick.png";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo da marvel" />
        <h1>RICK AND MORTY</h1>
        <nav>
          <div className="nav-pag">
            <RiHome2Line />
            <Link to="/frame">Home</Link>
          </div>
          <div className="nav-pag">
            <FiUser />
            <Link to="/frame/character">Character</Link>
          </div>
        </nav>
      </Content>
    </Container>
  );
}
