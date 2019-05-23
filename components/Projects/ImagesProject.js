import Carousel from "react-bootstrap/Carousel";
import Head from "next/head";
import PImages from "./PImages";

const carouselStyle = {
  position: "inherit",
  paddingLeft: "0px",
  paddingTop: "9%"
};
const ImagesProjects = ({ PhotosList }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Carousel style={carouselStyle} indicators={false}>
        {PhotosList.map((user, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={PhotosList[i].src}
                alt={PhotosList[i].Project}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImagesProjects;
