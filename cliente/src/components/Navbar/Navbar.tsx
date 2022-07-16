import s from '../../css/Navbar.module.css'
import { Link  } from 'react-router-dom'
import imgNavbar from '../../imgs/NavbarImage.jpg'
import React from 'react'

const Navbar = ({children}: React.PropsWithChildren) => {
    return (
        <nav className={s.navbarContainer}>
            <div className={s.navbarItemsContainer}>
                <img src={imgNavbar} alt='navbar'/>
            <ul>
                <li><Link className={s.navbarLink} to={'/'}>Favorite Videos</Link></li>
                <li><Link className={s.navbarLink} to={'newVideo'}>Add Video</Link></li>
            </ul>
            </div>
            {children}
        </nav>

    )
}

export default Navbar