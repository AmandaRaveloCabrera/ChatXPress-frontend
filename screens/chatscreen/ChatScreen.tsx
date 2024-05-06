import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import HeaderChat from "../../components/headerchat/HeaderChat";
import InputMessage from "../../components/inputmessage/InputMessage";
import MessagesContainer from "../../components/messagescontainer/MessagesContainer";
import { currentChatContext } from "../../context/CurrentChatContext";
import { ChatService } from "../../services/ChatService";
import { ICurrentChatRequest } from "../../interfaces/ICurrentChatRequest";
import { currentUserContext } from "../../context/CurrentUserContext";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
const ChatScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  const [loading, setLoading] = React.useState(false);
  const { setCurrentChat } = React.useContext(currentChatContext);
  const { currentUser } = React.useContext(currentUserContext);
  const { guestUser } = React.useContext(currentGuestUserContext);

  React.useEffect(() => {
    setLoading(true);

    const retrieveCurrentChat = async () => {
      try {
        const dataRequest: ICurrentChatRequest = {
          idUser: currentUser.id.toString(),
          idGuestUser: guestUser.id,
          name: guestUser.name,
        };
        const data = await ChatService.getCurrentChat(dataRequest);
        if (data) {
          setCurrentChat(data);
        } else {
          console.log("f");
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveCurrentChat();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View style={styles.mainContainer}>
        <HeaderChat />
        {loading ? (
          <View>
            <Text style={styles.styleText}>Cargando...</Text>
          </View>
        ) : (
          <MessagesContainer />
        )}

        <InputMessage />
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2F5D95CC",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleText: {
    color: "white",
    fontSize: 24,
  },
});
