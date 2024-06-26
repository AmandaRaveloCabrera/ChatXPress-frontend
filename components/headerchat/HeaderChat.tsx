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
import { IHeaderChatProps } from "../../interfaces/messages/IHeaderChatProps";
import Colors from "../../assets/styles/Colors";

/**
 * This component displays a header with information about
 * the chat used in the chat screen.
 */

const HeaderChat = ({ nameGuestUser }: IHeaderChatProps) => {
  const imageAvatar: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigation = React.useContext(NavigationContext);
  const navigateMenuChats = () => {
    navigation?.navigate("Main Page");
  };
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={navigateMenuChats}>
        <AntDesign name="caretleft" size={40} color={Colors.ternary} />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>{nameGuestUser}</Text>
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
  textContainer: {
    width: "50%",
    alignItems: "center",
  },
  nameStyle: {
    color: Colors.letterPrimary,
  },
});
