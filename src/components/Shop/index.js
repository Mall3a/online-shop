import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'
import ShopItem from '../ShopItem'
import styles from './index.module.css'


const Shop = props => {

    const apiKey = '5c6682b0';
    const baseURL= 'http://www.omdbapi.com/';
    const [searchValue, setSearchValue] = useState('');
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    });
    const items = state.data && state.data.Search;
    
    const searchItems = async () => {
        setState({
            data: null,
            loading: true,
            error: null
        })

        const resp = await fetch(`${baseURL}?apikey=${apiKey}&s=${searchValue}`);
        const data = await resp.json();
      
        if(data.Response === "False"){
            setState({
                loading: false,
                error: data.Error,
                data: null
            })
        }else{
            setState({
                loading: false,
                error: null,
                data
            })
        }
      
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        searchItems();
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
