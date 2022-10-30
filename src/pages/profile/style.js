import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 15,
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
    marginTop: 29,
    text: {
      fontWeight: "400",
      textAlign: "center",
      color: "#fff",
      fontWeight: "600",
      fontSize: 50,
    },
  },
  banner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "left",
    color: "#5E5CE5",
  },
  text_subtitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#5E5CE5",
  },

  form: {
    marginTop: 13,
    width: "100%",
    paddingStart: 27,
    paddingEnd: 27,
    flex: 1,
    marginTop: 70,
  },
  input: {
    height: 48,
    marginTop: 6,
    backgroundColor: "#FFF",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop:60,
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
    marginTop: 72,
    marginBottom: 13,
    fontSize: 17,
  },
});
