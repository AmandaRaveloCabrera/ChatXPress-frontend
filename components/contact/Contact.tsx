import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
import { IGuestUser } from "../../interfaces/users/guestuser/IGuestUser";
import { IContactProps } from "../../interfaces/users/allusers/IContactProps";
/**
 * This component displays a contact that is used within
 * the ContactContainer component which in turn is within
 * the chatmenu screen.
 */

const Contact = ({ id, name, lastname }: IContactProps) => {
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigation = React.useContext(NavigationContext);
  const { setGuestUser } = React.useContext(currentGuestUserContext);
  const navigateChat = (id: string, name: string) => {
    const data: IGuestUser = {
      id: id,
      name: name,
    };
    setGuestUser(data);
    navigation?.navigate("Chat");
  };
  return (
    <Pressable key={id} onPress={() => navigateChat(id, name)}>
      <View style={styles.contactContainer}>
        <View style={styles.contactSubContainer}>
          <View style={styles.avatarContainer}>
            <Image source={avatarDefault} style={styles.avatarStyle} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              {name} {lastname}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Contact;

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  contactSubContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatarContainer: {
    paddingRight: 10,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
  textContainer: {
    width: "60%",
  },
});
