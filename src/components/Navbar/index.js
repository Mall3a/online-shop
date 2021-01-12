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
                <Link className={styles.link} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link className={styles.link} to="/about">
                    <li>About</li>
                </Link>
                <Link className={styles.link} to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
