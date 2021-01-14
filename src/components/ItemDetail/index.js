import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch';
import styles from './index.module.css'
import noImage from '../../images/NO-IMAGE.png'
import { decrement, increment } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetailByTitle } from '../../api/endpoints/movies'

const ItemDetail = ({
    match
}) => {

    const { params } = match;
    
    const [data, setData] = useState(null);
    const { Title, Year, Poster, Country, Director, Language } = data != null && data;

    useEffect(() => {
        getMovieDetailByTitle(params.id)
        .then(resp => {
            setData(resp);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);

    //Redux
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
