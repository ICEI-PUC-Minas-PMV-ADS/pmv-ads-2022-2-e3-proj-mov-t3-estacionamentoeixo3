import React from "react";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailNavigation,
  selectDetailNavigation,
} from "../../flux/slices/detailNav";

const ListPark = ({ parks, pressCallback, hide }) => {
  const dispatch = useDispatch();
  const {
    detailNavigation: { state },
  } = useSelector(selectDetailNavigation);

  return parks?.map((park) => (
    <List.Item
      style={{
        display: !hide ? "flex" : "none",
      }}
      key={park.id}
      title={park.nome}
      description={park.rua}
      left={(props) => <List.Icon {...props} icon="car" />}
      onPress={async () => {
        await pressCallback(park);
        await dispatch(setDetailNavigation({ state: !state }));
      }}
    />
  ));
};

export default ListPark;
