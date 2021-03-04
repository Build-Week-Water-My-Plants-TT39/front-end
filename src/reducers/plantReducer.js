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
  plants: [],
  isLoading: false,
  error: '',
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        plants: [...state.plants, action.payload],
      };
    case GET_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case POST_PLANT_LOADING:
      return {
        plants: {
          ...state.plants,
        },
      };
    case POST_PLANT_SUCCESS:
      return {
        plants: {
          ...state.plants,
        },
      };
    case POST_PLANT_FAILURE:
      return {
        plants: {
          ...state.plants,
        },
      };
    case UPDATE_PLANT_LOADING:
      return {
        plants: {
          ...state.plants,
        },
      };
    case UPDATE_PLANT_SUCCESS:
      return {
        plants: {
          ...state.plants,
        },
      };
    case UPDATE_PLANT_FAILURE:
      return {
        plants: {
          ...state.plants,
        },
      };
    case DELETE_PLANT_LOADING:
      return {
        plants: {
          ...state.plants,
        },
      };
    case DELETE_PLANT_SUCCESS:
      return {
        plants: {
          ...state.plants,
        },
      };
    case DELETE_PLANT_FAILURE:
      return {
        plants: {
          ...state.plants,
        },
      };
    default:
      return state;
  }
};

export default plantReducer;
