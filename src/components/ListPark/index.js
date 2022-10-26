import React from "react";
import { List, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailNavigation,
  selectDetailNavigation,
} from "../../flux/slices/detailNav";
import theme from "../../flux/slices/theme";

const ListPark = ({ parks, pressCallback, hide }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {
    detailNavigation: { state },
  } = useSelector(selectDetailNavigation);

  return parks?.map((park) => (
    <List.Item
      style={{
        display: !hide ? "flex" : "none",
      }}
      key={park.id}
      theme={theme}
      title={park.nome}
      titleStyle={{ color: theme.colors.text }}
      descriptionStyle={{ color: theme.colors.text }}
      description={park.rua}
      left={(props) => (
        <List.Icon {...props} icon="car" color={theme.colors.text} />
      )}
      onPress={() => {
        pressCallback(park);
        dispatch(setDetailNavigation({ state: !state }));
      }}
    />
  ));
};

export default ListPark;
