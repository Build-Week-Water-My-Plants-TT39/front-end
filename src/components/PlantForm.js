import React, { useState } from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import plantFormSchema from '../utils/plantFormSchema';
import { connect } from 'react-redux';
import { postPlant, updatePlant, getPlants } from './../actions/plantActions';
import styled from 'styled-components';

const StyledPlant = styled.div`
  font-size: 1.8rem;
  margin: 0 auto;
  text-align: center;

  form {
    background-image: url(https://claire-ince.com/wp-content/uploads/2019/01/plant-header.jpg);
    background-size: 100% 100%;
    border-radius: 25px 25px;
    width: 400px;
    padding-bottom: 17%;
    margin: 3% auto 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 15px 15px #383a3d;
    align-items: center;
    justify-content: center;
  }

  input {
    font-size: 1.2rem;
    border-radius: 10px 10px;
    margin-bottom: 3%;
    text-align: center;
    padding: 5px;
    border: 1px solid black;
  }

  button {
    font-size: 1.2rem;
    border-radius: 15px 15px;
    padding: 8px;
    background-color: #acc8af;
    border: 1px solid gray;
    margin: 0 auto 5% auto;
    color: #363f34;

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

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
    <StyledPlant>
      <form onSubmit={submitHandler}>
        <section>
          <div>
            <input
              name="nickname"
              type="text"
              value={plantFormValues.nickname}
              onChange={changeHandler}
              placeholder="Nickname"
            />
          </div>
          <div>
            <input
              name="species"
              type="text"
              value={plantFormValues.species}
              onChange={changeHandler}
              placeholder="Species"
            />
          </div>
          <div>
            <input
              name="h2oFrequency"
              type="string"
              value={plantFormValues.h2oFrequency}
              onChange={changeHandler}
              placeholder="H2O Frequency"
            />
          </div>
          <button>Submit</button>
        </section>
      </form>
      <div>
        <span style={{ color: 'red' }}>{errors.nickname}</span>
        <div></div>
        <span style={{ color: 'red' }}>{errors.species}</span>
        <div></div>
        <span style={{ color: 'red' }}>{errors.h2oFrequency}</span>
      </div>{' '}
    </StyledPlant>
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
