import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageBackgroundProps,
  Pressable,
} from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import Colors from "../../assets/styles/Colors";

/**
 * This is the welcome screen.
 * It will show a background image indicating to the user
 * that she/he has to press it to go to the login.
 * You can press any part of the screen to go to
 * the indicated screen.
 */

const WelcomeScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondoHome.jpg");
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
          <Text style={styles.textStyle}> Tap to login</Text>
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
    justifyContent: "space-between",
    zIndex: 1,
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.letterPrimary,
    paddingTop: 110,
  },

  textStyle: {
    color: Colors.letterPrimary,
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 40,
  },
});
