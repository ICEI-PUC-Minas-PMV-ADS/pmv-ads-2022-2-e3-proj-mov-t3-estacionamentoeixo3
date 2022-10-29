import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  scroll_view: {
    maxHeight: 500,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    text: {
      fontWeight: "400",
      textAlign: "center",
      color: "#fff",
      fontWeight: "600",
      fontSize: 50,
    },
  },

  title_login: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 40,
  },
  form: {
    width: 340,
  },
  input: {
    height: 48,
    marginTop: 13,
    backgroundColor: "#FFF",
    color: "#000",
  },
  icon_eye: {
    color: "#5E5CE5",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    text: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
  },
  link_ou: {
    color: "#eee",
    fontSize: 19,
    marginTop: 20,
  },
  link_create: {
    color: "#eee",
    marginTop: 83,
    fontSize: 17,
  },
});
