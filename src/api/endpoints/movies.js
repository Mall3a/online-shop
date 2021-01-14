import axios from 'axios';
import { BASE_URL, APIKEY } from '../../environment';

const defaultParams = {
    apikey: APIKEY,
};

export const getMoviesByName = async (name) => {
    const response = await axios.get(`${BASE_URL}?&s=${name}`,{
        method: 'GET',
        params: {
          ...defaultParams,
        },
      });
    return response.data;
}


export const getMovieDetailById = (id) => {
    axios.get(`${BASE_URL}?&t=${id}`,{
        method: 'GET',
        params: {
          ...defaultParams,
        },
      }).then(response => response.data)
      .catch(e => {
        console.log(e);
    })
}




  




