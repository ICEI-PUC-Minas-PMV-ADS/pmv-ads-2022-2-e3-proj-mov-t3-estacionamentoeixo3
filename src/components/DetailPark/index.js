import React from "react";
import {
  Card,
  Paragraph,
  Title,
  Button,
  Avatar,
  useTheme,
  Text,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../flux/slices/theme";

const DetailParkOnSelected = ({ hide, info }) => {
  const themeSelected = useTheme();
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);
  const LeftContent = (props) => <Avatar.Icon {...props} icon="car" />;
  return (
    <Card
      elevation={5}
      mode="outlined"
      style={{ display: !hide ? "none" : "flex" }}
    >
      <Card.Title
        titleStyle={{
          fontSize: 20,
          fontWeight: "bold",
          color: theme ? "#000" : "#FFF",
        }}
        subtitleStyle={{
          fontSize: 15,
          fontWeight: "bold",
          marginTop: -10,
          color: theme ? "#000" : "#FFF",
        }}
        title={info?.nome}
        subtitle={info?.rua + "-" + info?.estado}
        left={LeftContent}
        theme={themeSelected}
      />
      <Card.Content theme={theme}>
        <Title
          level="H3"
          style={{ fontWeight: "bold", color: theme ? "#000" : "#FFF" }}
        >
          Vagas Livres: {info?.vagas}
        </Title>
        <Title
          level="H4"
          style={{ fontWeight: "bold", color: theme ? "#000" : "#FFF" }}
        >
          Valores
        </Title>
        <Paragraph>
          <Text style={{ fontWeight: "bold", color: theme ? "#000" : "#FFF" }}>
            Preço Carro:R$:
          </Text>
          {info?.precoCarro}
        </Paragraph>
        <Paragraph>
          <Text style={{ fontWeight: "bold", color: theme ? "#000" : "#FFF" }}>
            Preço Moto:R$:{info?.precoMoto}
          </Text>
        </Paragraph>
        <Button mode="contained" theme={theme} style={{ marginTop: 20 }}>
          <Text theme={theme} style={{ color: "#FFF" }}>
            Reservar
          </Text>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default DetailParkOnSelected;
