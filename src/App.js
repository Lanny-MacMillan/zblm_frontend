import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ZBL&M Bandpage</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shows</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
            <Nav.Link href="#pricing">Music</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    <Home />
    </>
  );
}

export default App;
