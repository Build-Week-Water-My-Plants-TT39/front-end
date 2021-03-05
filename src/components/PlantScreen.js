import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getPlants } from './../actions/plantActions';
import Plant from './Plant';
import PlantForm from './PlantForm';

const PlantScreen = (props) => {
  const userId = props.userId;
  const getPlants = props.getPlants;
  const plantArr = props.plants;
  const { push } = useHistory();

  useEffect(() => {
    getPlants(userId);
  }, [userId, getPlants]);

  return (
    <>
      <div id="plant-screen-div">
        <h1>Enjoy your plants!</h1>
        {plantArr.map((plant) => {
          return (
            <div
              id="wrapper-div"
              key={plant.plant_id}
              onClick={() => push(`/plants/edit/${plant.plant_id}`)}>
              <Plant
                key={plant.plant_id}
                nickname={plant.nickname}
                species={plant.species}
                frequency={plant.h2oFrequency}
              />
            </div>
          );
        })}
      </div>
      <PlantForm />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plant.plants,
    userId: state.user.user?.user_id,
  };
};

export default connect(mapStateToProps, { getPlants })(PlantScreen);
