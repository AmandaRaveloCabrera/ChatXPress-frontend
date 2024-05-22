import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { IUsersResponse } from "../../interfaces/users/allusers/IUsers";
import Contact from "../contact/Contact";
import { IContactContainerProps } from "../../interfaces/users/allusers/IContactContainer.Props";

/**
 * This component displays a container of all
 * contact components which is used in the chatmenu screen.
 */

const ContactsContainer = ({ allUsers }: IContactContainerProps) => {
  return (
    <ScrollView style={styles.ScrollContainer}>
      {allUsers.map((user: IUsersResponse) => (
        <Contact
          id={user._id}
          name={user.name}
          lastname={user.lastname}
          key={user._id}
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
