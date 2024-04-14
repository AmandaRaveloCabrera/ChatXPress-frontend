import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageBackgroundProps,
} from "react-native";
import React from "react";
import LoginForm from "../../components/loginform/LoginForm";

const LoginScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View>
        <Text style={styles.titleStyle}>LOGIN</Text>
      </View>
      <LoginForm />
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleStyle: {
    paddingTop: 125,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});
