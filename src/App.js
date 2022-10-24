import * as React from "react";
import "react-native-gesture-handler";
import {Provider, useSelector} from "react-redux";

import LogComponent from "./components/log/index.js";
import store from "./flux/store";
import LayoutProvider from "./components/layout/index.js";
import {SafeAreaView, SafeAreaViewBase, StatusBar} from "react-native";
import {selectTheme} from "./flux/slices/theme";
import {useTheme} from "react-native-paper";

function App() {


    return (
        <Provider store={store}>

            <LayoutProvider/>
            <LogComponent/>
        </Provider>
    );
}

export default App;
