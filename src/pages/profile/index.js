import axios from "../../axios/api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../flux/slices/message";
import { selectUser } from "../../flux/slices/user";
import { selectUserId } from "../../flux/slices/userId";
const Profile = () => {
  const themeStyle = useTheme();

  const [userModel, setUserModel] = useState({
    email: "",
    name: "",
  });
  const dispatch = useDispatch();
  const {
    userId: { id },
  } = useSelector(selectUserId);

  useEffect(() => {
    resultUserId();
  }, []);
  const resultUserId = async () => {
    const respo = await axios.get(`/userDetail/${id}`);
    const {
      data: { email, nome },
    } = respo;
    setUserModel((state) => ({ ...state, email: email, name: nome }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const respo = await axios.post(`/editUser/${id}`, {
        nome: userModel.name,
        email: userModel.email,
      });
      const { data, status } = respo;
      dispatch(
        setMessage({ text: data, state: true, type: "SUCCESS", status: status })
      );
    } catch (error) {
      const { data, status } = error;
      setMessage({ text: data, state: true, type: "ERROR", status: status });
    }
  };
  return (
    <View style={style.form}>
      <TextInput
        mode="outlined"
        label="Email"
        theme={{
          colors: {
            text: "#5E5CE5",
            placeholder: "#5E5CE5",
          },
        }}
        outlineColor="#5E5CE5"
        selectionColor="#5E5CE5"
        style={[{ ...style.input }]}
        value={userModel.email}
        onChangeText={(email) =>
          setUserModel((state) => ({ ...state, email: email }))
        }
      />
      <TextInput
        mode="outlined"
        label="Nome"
        theme={{
          colors: {
            text: "#5E5CE5",
            placeholder: "#5E5CE5",
          },
        }}
        outlineColor="#5E5CE5"
        selectionColor="#5E5CE5"
        style={[{ ...style.input }]}
        value={userModel.name}
        onChangeText={(nome) =>
          setUserModel((state) => ({ ...state, name: nome }))
        }
      />
      <Button
        style={style.button}
        mode="contained"
        onPress={(e) => onSubmit(e)}
      >
        <Text style={[{ ...style.button.text }]}>Editar</Text>
      </Button>
    </View>
  );
};

export default Profile;
