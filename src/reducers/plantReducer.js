import {
  GET_PLANTS_FAILURE,
  GET_PLANTS_LOADING,
  GET_PLANTS_SUCCESS,
  POST_PLANT_LOADING,
  POST_PLANT_SUCCESS,
  POST_PLANT_FAILURE,
  UPDATE_PLANT_FAILURE,
  UPDATE_PLANT_SUCCESS,
  UPDATE_PLANT_LOADING,
  DELETE_PLANT_LOADING,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAILURE,
} from '../actions/plantActions';

const initialState = {
  plant: {},
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS_LOADING:
      return {
        plant: {
          ...state.plant,
        },
      };
    case GET_PLANTS_SUCCESS:
      return {
        plant: {
          ...state.plant,
        },
      };
    case GET_PLANTS_FAILURE:
      return {
        plant: {
          ...state.plant,
        },
      };
    case POST_PLANT_LOADING:
      return {
        plant: {
          ...state.plant,
        },
      };
    case POST_PLANT_SUCCESS:
      return {
        plant: {
          ...state.plant,
        },
      };
    case POST_PLANT_FAILURE:
      return {
        plant: {
          ...state.plant,
        },
      };
    case UPDATE_PLANT_LOADING:
      return {
        plant: {
          ...state.plant,
        },
      };
    case UPDATE_PLANT_SUCCESS:
      return {
        plant: {
          ...state.plant,
        },
      };
    case UPDATE_PLANT_FAILURE:
      return {
        plant: {
          ...state.plant,
        },
      };
    case DELETE_PLANT_LOADING:
      return {
        plant: {
          ...state.plant,
        },
      };
    case DELETE_PLANT_SUCCESS:
      return {
        plant: {
          ...state.plant,
        },
      };
    case DELETE_PLANT_FAILURE:
      return {
        plant: {
          ...state.plant,
        },
      };
    default:
      return state;
  }
};

export default plantReducer;
