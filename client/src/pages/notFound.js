import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Home } from "react-feather";

function NotFound() {
  return (
    <Container>
      <h1 className="display-1">404</h1>
      <h1>Page not found</h1>
      <Link to="/home">
        Goto <Home /> home
      </Link>
    </Container>
  );
}

export default NotFound;
