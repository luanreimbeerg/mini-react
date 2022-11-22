import { Container, Content } from "./styles";
import logo from "../../assets/logoMarvel.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo da marvel" />
        <nav>
          <Link to="/frame">Home</Link>
          <Link to="/comics">Comics</Link>
        </nav>
      </Content>
    </Container>
  );
}
