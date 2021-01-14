import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'
import ShopItem from '../ShopItem'
import styles from './index.module.css'
import { getMoviesBySearch } from '../../api/endpoints/movies';

const Shop = () => {
   
    const [searchValue, setSearchValue] = useState('');
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    });
    const items = state.data && state.data.Search;

    const getMovies = async () => {
        setState({
            loading: true,
            error: null,
            data: null
        })
        
        const response = await getMoviesBySearch(searchValue);
        
        if(response.Response === "False"){
            setState({
                loading: false,
                error: response.Error,
                data: null
            })
        }else{
            setState({
                data: response,
                loading: false,
                error: null
            })
        }
    }

    const handleOnSubmit =  (e) => {
        e.preventDefault();
        getMovies();
        setSearchValue('');
    }

    return (
        <div>
            <h1 className={styles.shopPageTitle}>Shop Page</h1>
           <div className={styles.container}>
                <form onSubmit={handleOnSubmit} className={styles.filterOptions}>
                    <label>Buscar Película</label>
                    <input type="text" value={searchValue} onChange={e=>setSearchValue(e.target.value)}></input>
                    <button type="submit">Buscar</button>
                </form>

                <div className={styles.results}>
                    {state.loading && (<h1>Loading...</h1>)}
                    {state.error && (<h1>{state.error}</h1>)}
                    {state.data &&  (<div className={styles.shopItems}>
                        {items.map(item => <ShopItem key={item.imdbID} {...item} />)}
                    </div>)}
                </div>
           </div>
        </div>
    )
}

Shop.propTypes = {

}

export default Shop
