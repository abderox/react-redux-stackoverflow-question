import React from "react";

import { Provider } from "react-redux";


import ContainerCake from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import store from './components/redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <ContainerCake />
      </div>
    </Provider>
  );
}

export default App;
