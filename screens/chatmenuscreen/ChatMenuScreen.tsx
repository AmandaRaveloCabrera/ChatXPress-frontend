import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import ChatsContainer from "../../components/chatscontainer/ChatsContainer";
import { UserService } from "../../services/UserService";
import { currentUserContext } from "../../context/CurrentUserContext";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { ChatService } from "../../services/ChatService";
import { AsyncStore } from "../../services/AsyncStoreService";
import ContactsContainer from "../../components/contactscontainer/ContactsContainer";
import { IUsersResponse } from "../../interfaces/users/allusers/IUsers";

/**
 * This is the chatmenu screen.
 * Here, the user can see all the chats he/she has,
 * as well as all the contacts in the company.
 * In order to go to a chat, you can go through
 * the chats already written or through the contacts.
 * If the user wants to log out, pressing the corresponding icon
 * will navigate to the welcome screen.
 */

const ChatMenuScreen = () => {
  const { setChats } = React.useContext(allChatsFromUserContext);
  const { currentUser } = React.useContext(currentUserContext);
  const navigation = React.useContext(NavigationContext);

  const [users, setUsers] = React.useState([] as IUsersResponse[]);
  const [isVisibleChats, setIsVisibleChats] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const showContacts = () => {
    setIsVisibleChats(false);
  };

  const showChats = () => {
    setIsVisibleChats(true);
  };

  const signOut = () => {
    const fetchLogout = async () => {
      const token = await AsyncStore.getToken();
      if (token) {
        const response = await UserService.logout(currentUser.email, token);
        if (response) {
          navigation?.navigate("Home");
        } else {
          alert("Cannot log out correctly");
        }
      }
    };
    fetchLogout();
  };

  React.useEffect(() => {
    setLoading(true);

    const retrieveChats = async () => {
      try {
        const token = await AsyncStore.getToken();
        if (token) {
          const data = await ChatService.getChatsByIdUser(
            currentUser.id,
            token
          );
          if (data) {
            setChats(data);
          } else {
            setChats([]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const retrieveContacts = async () => {
      const token = await AsyncStore.getToken();
      if (token) {
        const data = await UserService.getContacts(token);
        if (data) {
          const dataFiltered = data.filter(
            (user) => user._id !== currentUser.id
          );
          setUsers(dataFiltered);
        } else {
          setUsers([]);
        }
      }
    };

    retrieveChats();
    retrieveContacts();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Chats</Text>
        <Pressable onPress={signOut}>
          <FontAwesome name="sign-out" size={36} color="white" />
        </Pressable>
      </View>
      <View style={styles.chatsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>
            Welcome {currentUser.username}!!!
          </Text>
        </View>
        <View style={styles.tabContainer}>
          <Pressable
            style={isVisibleChats ? styles.tabBorderSelected : styles.tabBorder}
            onPress={showChats}
          >
            <Text
              style={
                isVisibleChats ? styles.textSelected : styles.textNotSelected
              }
            >
              All messages
            </Text>
          </Pressable>
          <Pressable
            style={isVisibleChats ? styles.tabBorder : styles.tabBorderSelected}
            onPress={showContacts}
          >
            <Text
              style={
                isVisibleChats ? styles.textNotSelected : styles.textSelected
              }
            >
              All Contacts
            </Text>
          </Pressable>
        </View>
        {loading ? (
          <View style={styles.textLoading}>
            <Text style={{ color: "black", fontSize: 20 }}>Cargando...</Text>
          </View>
        ) : isVisibleChats ? (
          <ChatsContainer setVisibleChats={setIsVisibleChats} />
        ) : (
          <ContactsContainer allUsers={users} />
        )}
      </View>
    </View>
  );
};

export default ChatMenuScreen;

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 26,
    color: "#32659D",
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: "#32659D",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  headerStyle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  chatsContainer: {
    backgroundColor: "#D9D9D9",
    height: "100%",
    paddingTop: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  tabContainer: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabBorder: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 8,
    width: 130,
    alignItems: "center",
  },
  tabBorderSelected: {
    borderBottomWidth: 2,
    borderBottomColor: "#51A0B1",
    paddingBottom: 8,
    width: 130,
    alignItems: "center",
  },
  textSelected: {
    color: "#51A0B1",
    fontSize: 16,
    fontWeight: "bold",
  },
  textNotSelected: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  textLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
