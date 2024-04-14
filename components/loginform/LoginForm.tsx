import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
        />
        <TextInput
          placeholder="Email"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Send</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Return</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {
    height: "62%",
    width: "100%",
    backgroundColor: "#2F5D95CC",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "75%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 50,
  },
  inputContainer: {
    height: 230,
    width: "75%",
    justifyContent: "space-around",
  },

  inputStyle: {
    borderBottomWidth: 4,
    borderBottomColor: "white",
  },
  buttonStyle: {
    height: 60,
    width: 130,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
  },
});
