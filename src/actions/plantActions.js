import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_PLANTS_LOADING = 'GET_PLANTS_LOADING';
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';
export const GET_PLANTS_FAILURE = 'GET_PLANTS_FAILURE';

export const POST_PLANT_LOADING = 'POST_PLANT_LOADING';
export const POST_PLANT_SUCCESS = 'POST_PLANT_SUCCESS';
export const POST_PLANT_FAILURE = 'POST_PLANT_FAILURE';

export const UPDATE_PLANT_LOADING = 'UPDATE_PLANT_LOADING';
export const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS';
export const UPDATE_PLANT_FAILURE = 'UPDATE_PLANT_FAILURE';

export const DELETE_PLANT_LOADING = 'DELETE_PLANT_LOADING';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const DELETE_PLANT_FAILURE = 'DELETE_PLANT_FAILURE';

export const getPlants = (userId) => (dispatch) => {
  dispatch({ type: GET_PLANTS_LOADING });

  axiosWithAuth()
    .get(`/plants/${userId}`)
    .then((res) => {
      dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: GET_PLANTS_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const postPlant = (userId, plantInfo) => (dispatch) => {
  dispatch({ type: POST_PLANT_LOADING });
  axiosWithAuth()
    .post(`/plants/${userId}`, plantInfo)
    .then((res) => {
      dispatch({ type: POST_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: POST_PLANT_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const updatePlant = (plantId, plantInfo) => (dispatch) => {
  dispatch({ type: UPDATE_PLANT_LOADING });

  axiosWithAuth()
    .put(`/plants/${plantId}`, plantInfo)
    .then((res) => {
      dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_PLANT_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deletePlant = (plantId) => (dispatch) => {
  dispatch({ type: DELETE_PLANT_LOADING });

  axiosWithAuth()
    .delete(`/plants/${plantId}`)
    .then((res) => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PLANT_FAILURE,
        payload: err.response.data.message,
      });
    });
};
