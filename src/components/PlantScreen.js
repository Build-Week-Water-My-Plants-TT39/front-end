import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPlants } from './../actions/plantActions';

const PlantScreen = (props) => {
  const { userId } = useParams();
  console.log('plants', props.plants);

  useEffect(() => {
    props.getPlants(userId);
  }, [userId]);

  return (
    <div>
      <h1>Here are your plants.</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plant.plants,
  };
};

export default connect(mapStateToProps, { getPlants })(PlantScreen);
