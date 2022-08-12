import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={'/Admin'}>BZL&L Bandpage</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href={'/'}>Home</Nav.Link>
                        <Nav.Link href={'/Shows'}>Shows</Nav.Link>
                        <Nav.Link href={'/About'}>About</Nav.Link>
                        <Nav.Link href={'/Music'}>Music</Nav.Link>
                        <Nav.Link href={'/Gallery'}>Gallery</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>

        </>
    );
}

export default NavBar;
