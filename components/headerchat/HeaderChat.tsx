import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";

const HeaderChat = () => {
  const imageAvatar: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigation = React.useContext(NavigationContext);
  const navigateMenuChats = () => {
    navigation?.navigate("Main Page");
  };
  return (
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
  );
};

export default HeaderChat;

const styles = StyleSheet.create({
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
});
