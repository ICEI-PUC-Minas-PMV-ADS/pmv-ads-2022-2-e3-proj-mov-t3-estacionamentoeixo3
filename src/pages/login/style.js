import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  scroll_view: {
    maxHeight:700
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
    marginTop: 20,
  },
  button: {
    width: "100%",
    height: 60,
    marginTop: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    text: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 25,
      fontWeight: "bold",
    },
  },
  link_ou: {
    color: "#eee",
    fontSize: 19,
    marginTop: 50,
  },
  link_create: {
    color: "#eee",
    marginTop: 20,
    fontSize: 17,
  },
});
