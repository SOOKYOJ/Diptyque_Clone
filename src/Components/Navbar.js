import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  return (
    <Navbar style={{ position: 'fixed', width: '100vw' }} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{ fontSize: '20px', lineHeight: '1' }} href="/">
          DIPTYQUE <br /> <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'center' }}>paris</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/All">ALL</Nav.Link>
            <Nav.Link href="/Perfume">PERFUME</Nav.Link>
            <Nav.Link href="/Body">BODY CARE</Nav.Link>
            <Nav.Link href="/Hair">HAIR CARE</Nav.Link>
            <Nav.Link href="/Fragrance">HOME FRAGRANCE</Nav.Link>
            <Nav.Link href="/Life">LIFE CARE</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
