import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    backgroundColor: "#9A0007",
    textAlign: "center",
  },
  mainImage: {
    height: 190,
  },
  button: {
    height: 30,
    marginTop: 10,
    backgroundColor: "#D32F2F",
    width: 140,
    alignSelf: "flex-end",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 30,
    color: "#FFF",
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
