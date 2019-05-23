import Link from "next/link";

const PostLink = props => (
    <li>
    <Link as={`/gallery/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    </li>
)

export default function NavBar() {
    return (
    <div id="header">
    <div className="top">
      <div id="logo">
        <span className="image avatar48">
          <img src="/static/logo.png" alt="" />
        </span>
        <br />
        <Link href="/">
          <h1 id="title">
            Magic Point <br />
            Decoration
          </h1>
        </Link>
      </div>
      <nav id="nav">
      <ul>
          <li><a href="/"><span>Home Page</span></a></li>
          <li><a href="/projects"><span>Projects</span></a></li>
          <li><a href="/about"><span>About</span></a></li>
          <li><a href="/gallery"><span>All Creation</span></a></li>
        <PostLink id="hotels" title="Hotels" />
        <PostLink id="villas" title="Villas" />
        <PostLink id="retails" title="Retails" />
        <PostLink id="offices" title="Offices" />
        <li><a href="/contact"><span>Contact Us</span></a></li>
      </ul>
      </nav>
    </div>

    <div className="bottom">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
    )
}

