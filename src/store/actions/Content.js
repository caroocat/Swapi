import axios from 'axios';

export const getContent = (params) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      params ? params : 'http://swapi.dev/api/people/'
    );
    dispatch({ type: 'GET_CONTENT', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
