import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <>
      <h3>Number of cakes - {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

const ContainerCake = connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);

export default ContainerCake;
