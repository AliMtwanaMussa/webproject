import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <strong>STUDENT HOSTEL BOOKING</strong>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/dashboard" className="nav-link">Admin</Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/student" className="nav-link">Students Booking</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
