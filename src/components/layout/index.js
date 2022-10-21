import React from "react";
import Main from "../../navigations/main.js";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as PaperProvider} from "react-native-paper";
import {darkTheme, defaultTheme} from "../../@theme/index.js";
import {useSelector} from "react-redux";
import {selectTheme} from "../../flux/slices/theme.js";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "react-native";

const LayoutProvider = () => {
    const {theme} = useSelector(selectTheme);
    const themeSelect = theme ? darkTheme : defaultTheme;
    return (
        <PaperProvider theme={themeSelect}>

                <StatusBar barStyle={theme ? 'dark-content' : "light-content"}
                           showHideTransition={'fade'}
                           backgroundColor={themeSelect.colors.background}/>


                <NavigationContainer
                    theme={themeSelect}
                    children={<Main/>}
                >

                </NavigationContainer>

        </PaperProvider>
    );
};

export default LayoutProvider;
