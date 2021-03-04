import React, { useState } from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import plantFormSchema from '../utils/plantFormSchema';
import { connect } from 'react-redux';
import { postPlant, updatePlant, getPlants } from './../actions/plantActions';

const initialState = {
  nickname: '',
  species: '',
  h2oFrequency: '',
};
const initialErrors = {
  nickname: '',
  species: '',
  h2oFrequency: '',
};

const PlantForm = (props) => {
  const [plantFormValues, setPlantFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const { path } = useRouteMatch();
  const { plantId } = useParams();
  const { push } = useHistory();

  const validate = (inputName, inputValue) => {
    yup
      .reach(plantFormSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setErrors({ ...errors, [inputName]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] });
      });
  };

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    const valueToUse = type === 'checked' ? checked : value;
    validate(name, valueToUse);
    setPlantFormValues({
      ...plantFormValues,
      [name]: valueToUse,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const plantObj = {
      nickname: plantFormValues.nickname.trim(),
      species: plantFormValues.species.trim(),
      h2oFrequency: plantFormValues.h2oFrequency.trim(),
      user_id: props.userId,
    };
    if (path.includes('edit')) {
      props.updatePlant(plantId, plantObj);
      push(`/plants/${props.userId}`);
      props.getPlants(props.userId);
    } else {
      props.postPlant(props.userId, plantObj);
    }
    setPlantFormValues(initialState);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Nickname
            <input
              name="nickname"
              type="text"
              value={plantFormValues.nickname}
              onChange={changeHandler}
              placeholder="Nickname"
            />
          </label>
        </div>
        <div>
          <label>
            Species
            <input
              name="species"
              type="text"
              value={plantFormValues.species}
              onChange={changeHandler}
              placeholder="Species"
            />
          </label>
        </div>
        <div>
          <label>
            h2o Frequency
            <input
              name="h2oFrequency"
              type="string"
              value={plantFormValues.h2oFrequency}
              onChange={changeHandler}
              placeholder="h2o Frequency"
            />
          </label>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <span style={{ color: 'red' }}>{errors.nickname}</span>
        <div></div>
        <span style={{ color: 'red' }}>{errors.species}</span>
        <div></div>
        <span style={{ color: 'red' }}>{errors.h2oFrequency}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.user.user?.user_id,
  };
};

export default connect(mapStateToProps, { postPlant, updatePlant, getPlants })(
  PlantForm
);
