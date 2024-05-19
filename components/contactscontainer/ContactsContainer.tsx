import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { IUsersResponse } from "../../interfaces/users/allusers/IUsers";
import Contact from "../contact/Contact";
import { IContactContainerProps } from "../../interfaces/users/allusers/IContactContainer.Props";

const ContactsContainer = ({ allUsers }: IContactContainerProps) => {
  return (
    <ScrollView style={styles.ScrollContainer}>
      {allUsers.map((user: IUsersResponse) => (
        <Contact
          id={user._id.toString()}
          name={user.name.toString()}
          lastname={user.lastName.toString()}
          key={user._id.toString()}
        />
      ))}
    </ScrollView>
  );
};

export default ContactsContainer;

const styles = StyleSheet.create({
  ScrollContainer: {
    marginBottom: 25,
    height: "100%",
  },
});
