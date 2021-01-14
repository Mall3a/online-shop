import React from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch';
import styles from './index.module.css'
import noImage from '../../images/NO-IMAGE.png'
import { decrement, increment } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const ItemDetail = ({
    match
}) => {

    const apiKey = '5c6682b0';
    const baseURL= 'http://www.omdbapi.com/';

    const { params } = match;
    const {loading, error, data} = useFetch(`${baseURL}?apikey=${apiKey}&t=${params.id}`);

    const { Title, Year, Poster, Country, Director, Language } = data != null && data;


    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    console.log(data)
    return (
       <div>
            { data && (
                <div className={styles.container}>
                    <img className={styles.image} src={Poster!="N/A"?data.Poster:noImage}></img>
                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>{Title}</h1>
                        
                        <ul className={styles.infoList}>
                            <li>{Year}</li>
                            <li>{Country}</li>
                            <li>{Director}</li>
                            <li>{Language}</li>
                        </ul>
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
