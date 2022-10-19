import { Snackbar, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage, setMessage } from "../../flux/slices/message";
const LogComponent = () => {
  const { message } = useSelector(selectMessage);
  const dispatch = useDispatch();
  const onDismissSnackBar = () =>
    dispatch(setMessage({ ...message, state: false }));
  return (
    <Snackbar
      visible={message.state}
      style={[
        {
          flex: 1,
          zIndex: 1,
          elevated: 2,
          position: "relative",
          bottom: 0,
          backgroundColor: "#fff",
        },
      ]}
      theme={{
        colors: {
          accent: message.type === "ERROR" ? "red" : "verde",
        },
      }}
      duration={4000}
      collapsable
      onDismiss={onDismissSnackBar}
    >
      <Text
        style={[{ fontSize: 17, textAlign: "center" }]}
        theme={{
          colors: {
            text: message.type === "ERROR" ? "red" : "verde",
          },
        }}
      >
        {message.text}
      </Text>
    </Snackbar>
  );
};

export default LogComponent;
