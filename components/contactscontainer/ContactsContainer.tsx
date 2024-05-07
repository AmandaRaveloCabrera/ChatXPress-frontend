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
import { allUsers } from "../../data/allUsers";
import { IUsers } from "../../interfaces/IUsers";

const ContactsContainer = () => {
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  return (
    <ScrollView style={styles.ScrollContainer}>
      {allUsers.map((user: IUsers) => (
        <Pressable key={user.id}>
          <View style={styles.contactContainer}>
            <View style={styles.contactSubContainer}>
              <View style={styles.avatarContainer}>
                <Image source={avatarDefault} style={styles.avatarStyle} />
              </View>
              <View>
                <Text style={styles.textStyle}>
                  {user.name} {user.lastname}
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
});
