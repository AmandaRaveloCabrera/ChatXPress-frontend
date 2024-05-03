import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import ChatsContainer from "../../components/chatscontainer/ChatsContainer";
import { UserService } from "../../services/UserService";
//import { AsyncStore } from "../../services/AsyncStoreService";

/**
 * This is the chatmenu screen.
 * In it, the user can see all the chats he has,
 * the new chats he has not read.
 * She / He can also create new chats and if the user logs out
 * She / He will navigate to the welcome screen.
 */

const ChatMenuScreen = () => {
  const [displayInputSearch, setdisplayInputSearch] = React.useState(false);
  const [email, setemail] = React.useState("");
  const navigation = React.useContext(NavigationContext);
  //const handleSubmit = () => {
  //   const fetchData = async () => {
  //     const cookie = await AsyncStore.getCookie();
  //     if (cookie) {
  //       await UserService.getUserByEmail(email, cookie);
  //     }
  //   };
  //   fetchData();
  //   console.log("->" + email);
  // };
  const signOut = () => {
    const fetchLogout = async () => {
      await UserService.logout();
      navigation?.navigate("Home");
    };
    fetchLogout();
  };

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
          <Pressable onPress={() => setdisplayInputSearch(!displayInputSearch)}>
            <FontAwesome name="search" size={40} color="#51A0B1" />
          </Pressable>
          {displayInputSearch ? (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Introduzca un email"
                style={[styles.inputStyle, styles.textStyle]}
                placeholderTextColor={"#999"}
                value={email}
                onChangeText={setemail}
              />
              <Pressable>
                <FontAwesome name="play" size={30} color="#51A0B1" />
              </Pressable>
            </View>
          ) : null}
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabBorder}>
            <Text>All</Text>
          </View>
          <View style={styles.tabBorder}>
            <Text>New Message</Text>
          </View>
        </View>
        <ChatsContainer />
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
});
