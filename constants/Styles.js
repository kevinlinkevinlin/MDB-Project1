import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  gamesBackground: {
    flex: 1,
    backgroundColor: "#54c3e9",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white"
  },
  imageView: { height: "20%", width: "100%" },
  imageLogo: {
    flex: 1,
    width: null,
    height: null,
    marginBottom: 15,
    resizeMode: "contain",
  },
  image: {
    justifyContent: "center",
    margin: 10,
    height: "30%",
    width: "100%",
    resizeMode: "contain",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 18,
    color: "#3498db",
  },
  timerText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 3,
    marginTop: 2,
  },
  scoreText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 20,
    color: "#025b7a",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 28,
  },
});

export { styles };
