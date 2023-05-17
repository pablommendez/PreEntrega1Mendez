import CartWidget from '../CartWidget/CartWidget'
import logo from '../../../assets/logo.svg'
import './NavBar.css'

function NavBar () {
  return(
    <header className="header NavBarFont">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid NavBarWrapper">
          <img src={logo} alt="" className="NavBarLogo" />
          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav NavBarFont">
              <li className="nav-item">
                <a className="nav-link NavBarFont" href="#">Hombre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavBarFont" href="#">Mujer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavBarFont" href="#">Niños</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavBarFont" href="#">Niñas</a>
              </li>
            </ul>            
          </div>
          <CartWidget/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar