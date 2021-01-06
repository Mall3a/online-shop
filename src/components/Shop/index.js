import React from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'
import ShopItem from '../ShopItem'
import styles from './index.module.css'


const Shop = props => {

    const apiKey = '5c6682b0';
    const baseURL= 'http://www.omdbapi.com/';

    const {loading, error, data} = useFetch(`${baseURL}?apikey=${apiKey}&s=avengers`);
    
    const items = data && data.Search;
    
    return (
        <div>
            <h1 className={styles.shopPageTitle}>Shop Page</h1>

            {loading ? 
                (<h1>Loading...</h1>) 
            :
                (<div className={styles.shopItems}>
                {items.map(item => <ShopItem key={item.imdbID} {...item} />)}
                </div>)
            }

        </div>
    )
}

Shop.propTypes = {

}

export default Shop
