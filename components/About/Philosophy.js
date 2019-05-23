import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const styles= {
  marginTop: "5%",
}
const Hstyles= {
  marginLeft: "4%",
  fontSize: "200%",
  marginTop: "1%",
}
const ImgStyles= {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  verticalAlign: "middle",
  height: "400px",

  marginBottom: "30px"

}
const Philosophy = () => (
  <Container style={styles}>
    <Row>
      <Col><br/>
      <h2 style={Hstyles}>Our Philosophy</h2><br/>
      <p>We create timeless homes which will not age over the years. <br/>
      Typically our interiors are elegant and opulent, yet it is of utmost importance to us that they are also supremely comfortable and tailored entirely to the client needs.</p>
      <p>We mix The Antique and The Modern, We combining colors, patterns, textures and scales in order to create a magical design</p>
      </Col>
      <Col>
      <img src="../static/images/AjmanMajlis/41.JPG" style={ImgStyles}/>
      </Col>
    </Row>
  </Container>
);

export default Philosophy;
