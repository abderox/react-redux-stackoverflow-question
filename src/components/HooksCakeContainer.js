import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";


const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of cakes - {numOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
