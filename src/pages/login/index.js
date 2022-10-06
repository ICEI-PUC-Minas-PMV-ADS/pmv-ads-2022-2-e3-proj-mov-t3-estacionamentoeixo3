import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Avatar, Button, TextInput, useTheme } from "react-native-paper";
import style from "./style";

const LoginScreen = () => {
  const theme = useTheme();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const themes = {
    color: theme.colors.onSurface,
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.logo}>
          <Avatar.Icon size={100} icon="car" />
          <Text style={[{ ...style.logo.text, ...themes }]}>Why Park</Text>
        </View>
        <View style={style.form}>
          <Text style={[{ ...style.title_login, ...themes }]}>Login</Text>
          <TextInput
            mode="outlined"
            label="Email"
            style={style.input}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            mode="outlined"
            label="Senha"
            style={style.input}
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />

          <Button style={style.button} mode="contained">
            <Text style={[{ ...style.button.text, ...themes }]}>Entrar</Text>
          </Button>
        </View>

        <Text style={[{ ...style.link_ou, ...themes }]}>Ou</Text>
        <Text style={[{ ...style.link_create, ...themes }]}>
          Cadastre agora mesmo
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
