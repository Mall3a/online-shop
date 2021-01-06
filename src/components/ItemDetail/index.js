import React from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch';
import styles from './index.module.css'

const ItemDetail = ({
    match
}) => {

    const apiKey = '5c6682b0';
    const baseURL= 'http://www.omdbapi.com/';

    const { params } = match;
    const {loading, error, data} = useFetch(`${baseURL}?apikey=${apiKey}&t=${params.id}`);

    
    return (
       <div>
            { data && (
                <div className={styles.container}>
                    <img src={data.Poster}></img>
                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>{data.Title}</h1>
                    </div>
                </div>
                )
            }
       </div>)
}

ItemDetail.propTypes = {

}

export default ItemDetail
