import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { IUsersResponse } from "../../interfaces/IUsersResponse";
import { NavigationContext } from "@react-navigation/native";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
import { IGuestUser } from "../../interfaces/IGuestUser";

const Contact = (user: IUsersResponse) => {
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigation = React.useContext(NavigationContext);
  const { setGuestUser } = React.useContext(currentGuestUserContext);
  const navigateChat = (id: String, name: String) => {
    const data: IGuestUser = {
      id: id.toString(),
      name: name.toString(),
    };
    setGuestUser(data);
    navigation?.navigate("Chat");
  };
  return (
    <Pressable
      key={user._id.toString()}
      onPress={() => navigateChat(user._id, user.name)}
    >
      <View style={styles.contactContainer}>
        <View style={styles.contactSubContainer}>
          <View style={styles.avatarContainer}>
            <Image source={avatarDefault} style={styles.avatarStyle} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              {user.name} {user.lastName}
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
  lastMessageStyle: {
    color: "#606060",
    width: 200,
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
