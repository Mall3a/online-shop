import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
 
    useEffect(() => {
        fetchItems();
        return () => {isMounted.current=false}
    }, [url])
 

    const fetchItems = async () => {
        setState({
            data: null,
            loading: true,
            error: null
        })

        const resp = await fetch(url);
        const data = await resp.json();
        //console.log(data)

        if(isMounted.current){
            setState({
                loading: false,
                error: null,
                data
            })
        }
    }
    
    return state;
}

useFetch.propTypes = {
    url : PropTypes.string.isRequired
}

export default useFetch
