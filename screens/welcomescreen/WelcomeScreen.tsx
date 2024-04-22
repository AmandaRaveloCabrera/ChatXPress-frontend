import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageBackgroundProps,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";

const WelcomeScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  const navigation = React.useContext(NavigationContext);

  const navigateToLogin = () => {
    navigation?.navigate("Login");
  };
  return (
    <Pressable onPress={navigateToLogin}>
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
    </Pressable>
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
