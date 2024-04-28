import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
          <Entypo name="emoji-happy" size={32} color="#7D7C7C" />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Text input"
              style={styles.inputMessageStyle}
              placeholderTextColor={"#FFF"}
            />
          </View>
          <AntDesign name="caretright" size={36} color="#51A0B1" />
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
    backgroundColor: "#D9D9D9",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputContainer: {
    backgroundColor: "#7D7C7C",
    width: "75%",
    paddingHorizontal: "5%",
    borderRadius: 20,
  },
  inputMessageStyle: {
    color: "white",
  },
});
