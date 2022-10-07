import React from "react";
import { View } from "react-native";
import {
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  Button,
  Avatar,
  TextInput,
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
          primary: theme.colors.background,
        },
      }}
    >
      <View
        style={[
          {
            display: "flex",
            width: 200,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Avatar.Icon icon="power" size={42} />
        <Switch
          style={[{ backgroundColor: theme.colors.background }]}
          color={"#000"}
          value={isThemeDark}
          onChange={handlerStateSwitch}
        />
      </View>
    </Appbar.Header>
  );
};

export default Header;
