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
  message: '',
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
        plants: action.payload,
      };
    case GET_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case POST_PLANT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case POST_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        plants: [...state.plants, action.payload],
      };
    case POST_PLANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_PLANT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case UPDATE_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case UPDATE_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_PLANT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case DELETE_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case DELETE_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default plantReducer;
