import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './index.module.css';

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img className={styles.logo} src={logo} />
            </Link>
            <ul className={styles.navLinks}>
                <li>
                    <Link className={styles.link} to="/shop">
                        Shop 
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
        
    )
}

Navbar.propTypes = {

}

export default Navbar
