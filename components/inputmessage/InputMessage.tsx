import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const InputMessage = () => {
  return (
    <View style={styles.inputMessageContainer}>
      <Entypo name="emoji-happy" size={32} color="#7D7C7C" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Text input"
          style={styles.inputMessageStyle}
          placeholderTextColor={"#FFF"}
        />
      </View>
      <AntDesign name="caretright" size={36} color="#51A0B1" />
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  inputMessageContainer: {
    backgroundColor: "#D9D9D9",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputContainer: {
    backgroundColor: "#7D7C7C",
    width: "75%",
    paddingHorizontal: "5%",
    borderRadius: 20,
  },
  inputMessageStyle: {
    color: "white",
  },
});
