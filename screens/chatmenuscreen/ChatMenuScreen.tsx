import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import ChatsContainer from "../../components/chatscontainer/ChatsContainer";
import { UserService } from "../../services/UserService";
import { currentUserContext } from "../../context/CurrentUserContext";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { ChatService } from "../../services/ChatService";
import { AsyncStore } from "../../services/AsyncStoreService";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { allUsersContext } from "../../context/AllUsersContext";
import ContactsContainer from "../../components/contactscontainer/ContactsContainer";
//import { AsyncStore } from "../../services/AsyncStoreService";

/**
 * This is the chatmenu screen.
 * In it, the user can see all the chats he has,
 * the new chats he has not read.
 * She / He can also create new chats and if the user logs out
 * She / He will navigate to the welcome screen.
 */

const ChatMenuScreen = () => {
  const { setChats } = React.useContext(allChatsFromUserContext);
  const { setUsers } = React.useContext(allUsersContext);
  const [isVisibleChats, setIsVisibleChats] = React.useState(true);
  const { currentUser } = React.useContext(currentUserContext);
  const [loading, setLoading] = React.useState(false);
  const navigation = React.useContext(NavigationContext);
  const handleSubmit = () => {
    alert("Proximamente en cinesss ;-;");
  };
  const showContacts = () => {
    setIsVisibleChats(false);
  };
  const showChats = () => {
    setIsVisibleChats(true);
  };
  const signOut = () => {
    const fetchLogout = async () => {
      await UserService.logout();
      navigation?.navigate("Home");
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
            currentUser.id.toString(),
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
        const data = await ChatService.getChatsByIdUser(
          currentUser.id.toString(),
          token
        );
        if (data) {
          setUsers(data);
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
        <Text style={styles.titleStyle}>Chats</Text>
        <Pressable onPress={signOut}>
          <FontAwesome name="sign-out" size={36} color="white" />
        </Pressable>
      </View>
      <View style={styles.chatsContainer}>
        <View style={styles.inputSearchContainer}>
          <Pressable onPress={handleSubmit}>
            <FontAwesome name="search" size={40} color="#51A0B1" />
          </Pressable>
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
          <ChatsContainer />
        ) : (
          <ContactsContainer />
        )}
      </View>
    </View>
  );
};

export default ChatMenuScreen;

const styles = StyleSheet.create({
  imagenStyle: {
    height: 50,
    width: 50,
  },
  inputSearchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  titleStyle: {
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
  inputContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputStyle: {
    borderBottomWidth: 4,
    borderBottomColor: "#51A0B1",
    width: "80%",
  },
  textStyle: {
    color: "black",
    fontSize: 18,
  },
  textLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
