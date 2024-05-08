import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { allUsersContext } from "../../context/AllUsersContext";
import { IUsersResponse } from "../../interfaces/IUsersResponse";
import { IGuestUser } from "../../interfaces/IGuestUser";
import { NavigationContext } from "@react-navigation/native";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";

const ContactsContainer = () => {
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
  const { users } = React.useContext(allUsersContext);
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  return (
    <ScrollView style={styles.ScrollContainer}>
      {users.map((user: IUsersResponse) => (
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
      ))}
    </ScrollView>
  );
};

export default ContactsContainer;

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
  ScrollContainer: {
    marginBottom: 25,
    height: "100%",
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
  textContainer: {
    width: "60%",
  },
});
