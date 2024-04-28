import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import HeaderChat from "../../components/headerchat/HeaderChat";
import InputMessage from "../../components/inputmessage/InputMessage";

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
          <Text>My messages</Text>
        </View>
        <InputMessage />
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
    // backgroundColor: "yellow",
    height: "75%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
