import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { ProjectItems } from "./ProjectItems";

const carouselStyle = {
  position: "inherit",
  paddingLeft: "0px"
};
const pStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "130%",
  fontFamily: "Times New Roman"

};
const imgStyle = {
  width: "100%",
  height: "200px"
};
export default function Carousels() {
  return (
    <div>
      <Carousel style={carouselStyle} indicators={false}>
        <Carousel.Item>
          <br />
          <Container>
            <Row>
              <Link as={`/projects/ADbank`} href={`/images?title=adBank`}>
                <Col xs={6} md={4}>
                  <p style={pStyle}>AD Bank</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[0]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[0])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[0])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/AjmanMajlis`}
                href={`/images?title=AjmanMajlis`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[1]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[1]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[1])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[1])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/AlWaleedParadise`}
                href={`/images?title=AlWaleedParadise`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[2]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[2]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[2])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[2])
                    }
                  />
                </Col>
              </Link>
            </Row>
            <br />
            <Row>
              <Link as={`/projects/AlWazzan`} href={`/images?title=AlWazzan`}>
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[3]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[3]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[3])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[3])
                    }
                  />
                </Col>
              </Link>
              <Link as={`/projects/Aprtment`} href={`/images?title=Aprtment`}>
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[4]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[4]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[4])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[4])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/ArtCenter`}
                href={`/images?title=ArtCenter`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[5]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[5]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[5])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[5])
                    }
                  />
                </Col>
              </Link>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <br />
            <Row>
              <Link
                as={`/projects/BelresheedDubaiOffice`}
                href={`/images?title=BelresheedDubaiOffice`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[6]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[6]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[6])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[6])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/BelresheedSharjahOffice`}
                href={`/images?title=BelresheedSharjahOffice`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[7]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[7]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[7])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[7])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/FitnessFirst`}
                href={`/images?title=FitnessFirst`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[8]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[8]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[8])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[8])
                    }
                  />
                </Col>
              </Link>
            </Row>
            <br />
            <Row>
              <Link
                as={`/projects/GentsSaloon`}
                href={`/images?title=GentsSaloon`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[9]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[9]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[9])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[9])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/HamilAlmuskShop`}
                href={`/images?title=HamilAlmuskShop`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[10]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[10]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[10])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[10])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/JumeriahVilla`}
                href={`/images?title=JumeriahVilla`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[11]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[11]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[11])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[11])
                    }
                  />
                </Col>
              </Link>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <br />
            <Row>
              <Link as={`/projects/KSAVilla`} href={`/images?title=KSAVilla`}>
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[12]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[12]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[12])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[12])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/MedicalCenter`}
                href={`/images?title=MedicalCenter`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[13]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[13]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[13])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[13])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/MoroccanProject`}
                href={`/images?title=MoroccanProject`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[14]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[14]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[14])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[14])
                    }
                  />
                </Col>
              </Link>
            </Row>
            <br />
            <Row>
            <Link
                as={`/projects/OsamaVilla`}
                href={`/images?title=OsamaVilla`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[15]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[15]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[15])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[15])
                    }
                  />
                </Col>
            </Link>
            <Link
                as={`/projects/PanamaDCC`}
                href={`/images?title=PanamaDCC`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[16]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[16]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[16])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[16])
                    }
                  />
                </Col>
              </Link>
            <Link
                as={`/projects/Party21Sahara`}
                href={`/images?title=Party21Sahara`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[17]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[17]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[17])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[17])
                    }
                  />
                </Col>
              </Link>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <br />
            <Row>
            <Link
                as={`/projects/Project3`}
                href={`/images?title=Project3`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[18]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[18]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[18])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[18])
                    }
                  />
                </Col>
              </Link>
            <Link
                as={`/projects/Project5`}
                href={`/images?title=Project5`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[19]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[19]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[19])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[19])
                    }
                  />
                </Col>
              </Link>
            <Link
                as={`/projects/Project6`}
                href={`/images?title=Project6`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[20]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[20]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[20])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[20])
                    }
                  />
                </Col>
              </Link>
            </Row>
            <br />
            <Row>
            <Link
                as={`/projects/Project7`}
                href={`/images?title=Project7`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[21]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[21]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[21])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[21])
                    }
                  />
                </Col>
              </Link>
            <Link
                as={`/projects/Project8`}
                href={`/images?title=Project8`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[22]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[22]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[22])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[22])
                    }
                  />
                </Col>
              </Link>
            <Link
                as={`/projects/Project9`}
                href={`/images?title=Project9`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[23]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[23]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[23])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[23])
                    }
                  />
                </Col>
              </Link>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <br />
            <Row>
            <Link
                as={`/projects/ThaminaVilla`}
                href={`/images?title=ThaminaVilla`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[24]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[24]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[24])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[24])
                    }
                  />
                </Col>
              </Link>
              <Link
                as={`/projects/villaBarshaSouth`}
                href={`/images?title=villaBarshaSouth`}
              >
                <Col xs={6} md={4}>
                  <p style={pStyle}>{ProjectItems.project[25]}</p>
                  <Image
                    style={imgStyle}
                    src={ProjectItems.main[25]}
                    thumbnail
                    roundedCircle
                    onMouseOver={e =>
                      (e.currentTarget.src = ProjectItems.hover[25])
                    }
                    onMouseOut={e =>
                      (e.currentTarget.src = ProjectItems.main[25])
                    }
                  />
                </Col>
              </Link>

            </Row>
            <br />
          </Container>
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        p,
        .P {
          text-align: center;
          color: white;
          font-size: 200%;
          font: inherit;
        }
      `}</style>
    </div>
  );
}
