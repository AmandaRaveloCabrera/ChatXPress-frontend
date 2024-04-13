import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageBackgroundProps,
  Button,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {
  const background: ImageBackgroundProps = require("../assets/images/fondo.jpg");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View>
        <Text style={styles.titleStyle}>CHAT XPRESS</Text>
      </View>
      <View></View>
      <View>
        <Button title="Tap to login"></Button>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});
