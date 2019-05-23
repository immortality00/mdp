import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Head from "next/head";
import Container from "react-bootstrap/Container";

const styles = {
  color: 'white',
  opacity: "1",

}
const Header = () => (
  <Container>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img src="../static/logo.png" />
				Magic Point Decoration L.C.C
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-sm-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about" style={styles}>About</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <style jsx>{`
      img {
        width: 80px;
        height: 50px;
				padding-right: 3%;
				text-align: center;
      }
    `}</style>
  </Container>
);
export default Header;
