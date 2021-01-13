import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.module.css';

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
            <h3>Logo</h3>
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
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
