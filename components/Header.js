import Link from 'next/link'

const Header = () => (
    <header id="header" >
    <div className="logo">
      <span>
        <img className="logoImage" src="./static/logo.png" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Magic Point Decoration L.L.C</h1>
        <p>We are the best Interior, Exterior and Architecture Firm.</p>
      </div>
    </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
  </header>
)

export default Header