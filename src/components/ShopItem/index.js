import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import noImage from '../../images/NO-IMAGE.png'
const ShopItem = ({
    Title,
    Year,
    imdbID,
    Poster
}) => {

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={Poster!="N/A"?Poster:noImage} alt={imdbID}></img>
            <Link to={`/shop/${Title}`} className={styles.link}>
                <p className={styles.cardTitle}>{Title}</p>
            </Link>
            <p className={styles.cardText}>{Year}</p>
        </div>
    )
}

ShopItem.propTypes = {

}

export default ShopItem
