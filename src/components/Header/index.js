import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="container">
    <button>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="Website Logo"
          className="website-logo"
        />
      </Link>
    </button>
  </nav>
)

export default Header
