import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

const PImages = (props) => (

      <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.src}
        alt={props.Project}
      />
    </Carousel.Item>
);

export default PImages;
