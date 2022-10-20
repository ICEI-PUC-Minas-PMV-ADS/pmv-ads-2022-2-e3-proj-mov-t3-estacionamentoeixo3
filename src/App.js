import * as React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";

import LogComponent from "./components/log/index.js";
import store from "./flux/store";
import LayoutProvider from "./components/layout/index.js";

function App() {
  return (
    <Provider store={store}>
      <LayoutProvider  />
      <LogComponent />
    </Provider>
  );
}

export default App;
