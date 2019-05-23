import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const styles= {
    marginTop: "10%",
}
const Hstyles= {
    marginLeft: "4%",
    fontSize: "200%"
}
const ImgStyles= {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    verticalAlign: "middle",
    height: "400px",
    width: "400px",
    marginBottom: "30px"

}

const AboutUs = () => (
<Container style={styles}>
  <Row>
    <Col>
    <img src="../static/images/ADBank/Bank_View10.jpg" style={ImgStyles}/>
    </Col>
    <Col xs={7}>
    <h2 style={Hstyles}><small>About Us</small></h2>
    <h5 style={Hstyles}>We are the best Interior, Exterior and Architecture Firm</h5>
       <br/>
        <p>
          Magic point decoration was established in 2001 with a business
          objective of serving interior decoration work in UAE. Our company
          began operations to help event organizers to translate their vision to
          reality.
        </p>
        <p>
          The hallmark of our success has been our resolve to provide the best
          possible service to our customers using the best equipment, production
          techniques and suppliers.
        </p>
        <p>
          We undertake projects for interior design of any occupancy like
          offices, residences Villas, retail spaces, restaurants. With a strong
          team and skilled craftsmen we deliver the team of magic point is
          enthusiastic and qualified to meet all kinds of customer desires and
          each business division is independently managed by a team of
          professionals with enriched experience and qualifications.
        </p>
    </Col>
  </Row>
  <style jsx global>{`
      h2, h5, p {
        color: white;
        font-family: "Times New Roman";
      }
    `}</style>
</Container>
);

export default AboutUs;