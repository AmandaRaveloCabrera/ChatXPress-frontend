import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageBackgroundProps,
} from "react-native";
import React from "react";
import LoginForm from "../../components/loginform/LoginForm";
import Colors from "../../assets/styles/Colors";

/**
 * This is the login screen.
 * It will show, in addition to the background image,
 * a form to enter the user.
 * When pressing the send button, if the user is correct
 * it will go to the next screen and if not an alert will appear
 * indicating that the user is incorrect.
 * The return button is to return to the welcome screen.
 */

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
    color: Colors.letterPrimary,
  },
});
