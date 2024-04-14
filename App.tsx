//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import WelcomeScreen from "./screens/welcomescreen/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
