import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Text,
  View,
  ImageProps,
} from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import HeaderChat from "../../components/headerchat/HeaderChat";

const ChatScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View style={styles.mainContainer}>
        <HeaderChat />
        <View style={styles.messagesContainer}>
          <Text>MyChats</Text>
        </View>
        <View style={styles.inputMessageContainer}>
          <Text>Input message</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2F5D95CC",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messagesContainer: {
    backgroundColor: "yellow",
    height: "75%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputMessageContainer: {
    backgroundColor: "gray",
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
