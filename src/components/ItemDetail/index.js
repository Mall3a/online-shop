import React from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch';
import styles from './index.module.css'

import { decrement, increment } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const ItemDetail = ({
    match
}) => {

    const apiKey = '5c6682b0';
    const baseURL= 'http://www.omdbapi.com/';

    const { params } = match;
    const {loading, error, data} = useFetch(`${baseURL}?apikey=${apiKey}&t=${params.id}`);

    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

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
            <h1>{counter}</h1>
            <button 
                onClick={handleIncrement}
            >
                +
            </button>
            <button 
                onClick={handleDecrement}
            >
                -
            </button>
       </div>)
}

ItemDetail.propTypes = {

}

export default ItemDetail
