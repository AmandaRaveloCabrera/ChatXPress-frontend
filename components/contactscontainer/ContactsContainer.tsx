import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { allUsersContext } from "../../context/AllUsersContext";
import { IUsersResponse } from "../../interfaces/users/allusers/IUsers";
import Contact from "../contact/Contact";

const ContactsContainer = () => {
  const { users } = React.useContext(allUsersContext);
  return (
    <ScrollView style={styles.ScrollContainer}>
      {users.map((user: IUsersResponse) => (
        <Contact
          _id={user._id}
          name={user.name}
          lastName={user.lastName}
          email={user.email}
          department={user.department}
          isActive={user.isActive}
          password={user.password}
          idRole={user.idRole}
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
