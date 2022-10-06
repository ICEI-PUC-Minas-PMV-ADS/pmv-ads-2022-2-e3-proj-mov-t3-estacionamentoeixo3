import React from "react";
import { View } from "react-native";
import {
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  Button,
} from "react-native-paper";
import { PreferencesContext } from "../../contexts";

const Header = ({ route, navigation }) => {
  const theme = useTheme();
  const { isThemeDark, setIsThemeDark } = React.useContext(PreferencesContext);

  const handlerStateSwitch = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <Appbar.Header
      dark={true}
      theme={{
        dark: true,
        mode: "",
        colors: {
          primary: theme.colors.primary,
        },
      }}
    >
      {route.name !== "Login" ? <Appbar.Content title={route.name} /> : ""}
      <View>
        <Switch
          style={[{ backgroundColor: theme.colors.primary }]}
          color={"#000"}
          value={isThemeDark}
          onChange={handlerStateSwitch}
        />
      </View>
    </Appbar.Header>
  );
};

export default Header;
