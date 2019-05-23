import Link from "next/link";

const Photos = (props) => (

      <article className="thumb">
      <Link href={props.src} >
          <img src={props.src} alt="" />
        </Link>
      </article>
);

export default Photos;
