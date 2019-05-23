import Head from "next/head";
import Link from "next/link";
import Header from "../components/Contact/Header";
import Footer from "../components/Projects/Footer";
import Forms from "../components/Contact/Forms";
import GMap from "../components/Contact/GMap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  marginTop: "5%",
  marginLeft: "10%"
};
const Cstyles = {
  paddingTop: "5%",
  paddingLeft: "6%",
  marginRight: "-18%",
  boxShadow: "3px 3px 3px 3px black"
};

const Rstyles = {
  marginBottom: "3%",
  paddingTop: "2%",
  marginRight: "-20%",
  boxShadow: "3px 3px 3px 3px black"
};

const Contact = () => (
  <div>
    <Head>
      <title>Contact Us</title>
    </Head>
    <Header />
    <Container style={styles}>
      <Row style={Rstyles}>
        <Col xs={7}>
          <p>
            Magic Point Decoration L.L.C
            <br />
            <br />
            Office 1814 Burj Khalifa - Metropolis Tower
            <br />
            P.O.Box 76517 Dubai U.A.E
            <br />
          </p>
        </Col>
        <Col style={{ paddingLeft: "6%" }}>
          <p>
            <a style={{ color: "white" }} href="tel:+971553801994">
              Phone: +971553801994
            </a>
          </p>
          <a href="mailto:inquiry@magicpoint.ae">
            <p>Email: inquiry@magicpoint.ae</p>
          </a>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/the.3.eye/?hl=en"
              >
                <span>
                  <img
                    className="IconImage"
                    src="./static/icons/instagram.png"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <img
                    className="IconImage"
                    src="./static/icons/Facebook.png"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.pinterest.com/MagicPointDecoration09/"
              >
                <span>
                  <img
                    className="IconImage"
                    src="./static/icons/Pinterest.png"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+971553801994">
                <span>
                  <img className="IconImage" src="./static/icons/phone.png" />
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=971553801994"
              >
                <span>
                  <img
                    className="IconImage"
                    src="./static/icons/whatsapp.png"
                  />
                </span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
            <GMap />
        </Col>
        <Col style={Cstyles}>
        <Forms/>
        </Col>
      </Row>
    </Container>
    <Footer />

    <style jsx global>{`
      body {
        background: #222629;
        font-family: "Times New Roman";
      }
      .IconImage {
        cursor: pointer;
        list-style: none;
        display: grid;
        border-radius: 100%;
        box-shadow: inset 0 0 0 1px #ffffff;
        height: 2.25rem;
        line-height: 2.25rem;
        text-align: center;
        width: 2.25rem;
      }
      li {
        padding-left: 4%;
      }
      p {
        color: white;
        font-size: 120%;
      }
      ul {
        display: flex;
        margin-left: -15%;
      }
    `}</style>
  </div>
);

export default Contact;
