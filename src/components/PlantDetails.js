import React from 'react';
import Plant from './Plant';
import PlantForm from './PlantForm';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePlant, getPlants } from './../actions/plantActions';

function PlantDetails(props) {
  const { plantId } = useParams();
  const { plants } = props;
  const { push } = useHistory();

  const plantObj = plants.filter((plant) => {
    return plant.plant_id.toString() === plantId;
  });

  const deletePlant = () => {
    props.deletePlant(plantId);
    push(`/plants/${props.userId}`);
    props.getPlants(props.userId);
  };

  return (
    <div>
      <Plant
        nickname={plantObj[0]?.nickname}
        species={plantObj[0]?.species}
        frequency={plantObj[0]?.h2oFrequency}
      />
      <PlantForm />
      <button onClick={deletePlant}>Delete Plant</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plants: state.plant.plants,
    userId: state.user.user?.user_id,
  };
};

export default connect(mapStateToProps, { deletePlant, getPlants })(
  PlantDetails
);
