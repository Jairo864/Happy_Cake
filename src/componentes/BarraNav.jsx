import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function BarraNav() {
  return (
    <Navbar bg="danger"  >
      <Container >
          <Nav >
            <Link to="/" className='text-white fs-5 ms-3 text-decoration-none'> 🏠 Home</Link>
            <Link to="/contacto" className='text-white fs-5 ms-3 text-decoration-none'> 📒 Contacto</Link>
          </Nav>
          <Navbar.Brand className="text-white fs-5 ms-3" >Happy Cake 🍰</Navbar.Brand>
         </Container>
    </Navbar>
  );
}

export default BarraNav;