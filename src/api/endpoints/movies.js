import axios from 'axios';
import { BASE_URL, APIKEY } from '../../environment';

const defaultParams = {
    apikey: APIKEY,
};

export const getMoviesBySearch = async (s) => {
    const response = await axios.get(`${BASE_URL}?&s=${s}`,{
        method: 'GET',
        params: {
          ...defaultParams,
        },
      });
    return response.data;
}


export const getMovieDetailByTitle = async (name) => {
  const response = await axios.get(`${BASE_URL}?&t=${name}`,{
        method: 'GET',
        params: {
          ...defaultParams,
        },
      })
  return response.data;
}




  




