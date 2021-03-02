import Link from 'next/link'
import {Image, ImageGroup} from "@chakra-ui/react"
const Navigation =() => {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Image
            borderRadius="full"
  boxSize="50px"
  src="https://www.lopezocadizcontadores.com/wp-content/uploads/2018/07/cropped-logos_lo_icon-2.png"
  alt="Segun Adebayo"
/>
        <div className="container-fluid">
        <Link href="/">
            <a className="navbar-brand">Inicio</a>
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               
              <li className="nav-item">
            <Link href="/about">
                <a className="nav-link">Acerca de</a>
            </Link>
              </li>
              <li className="nav-item">
            <Link href="/services">
                <a className="nav-link">Servicios</a>
            </Link>
              </li> 
                  
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation;