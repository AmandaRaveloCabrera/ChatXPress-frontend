import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";

const ChatScreen = () => {
  const imageAvatar: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  const navigation = React.useContext(NavigationContext);
  const navigateMenuChats = () => {
    navigation?.navigate("Main Page");
  };
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Pressable onPress={navigateMenuChats}>
            <AntDesign name="caretleft" size={40} color="#51A0B1" />
          </Pressable>
          <View>
            <Text style={styles.nameStyle}>Manolito el de La Esquina</Text>
            <Text style={styles.timeStyle}>Ayer 12:45</Text>
          </View>
          <Image source={imageAvatar} style={styles.avatarStyle} />
        </View>
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
  headerContainer: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatarStyle: {
    height: 50,
    width: 50,
  },
  nameStyle: {
    color: "white",
  },
  timeStyle: {
    color: "#51A0B1",
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
