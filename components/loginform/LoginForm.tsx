import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { user } from "../../data/user";

const LoginForm = () => {
  const navigation = React.useContext(NavigationContext);
  const initialUserState = {
    name: "",
    email: "",
    password: "",
  };
  const [currentUser, setCurrentUser] = React.useState(initialUserState);
  const returnWelcomeScreen = () => {
    navigation?.navigate("Home");
  };
  const fetchLoginUser = () => {
    if (user.name == "" || user.email == "" || user.password == "") {
      alert("Debes introducir todos los datos.");
    }
    if (
      currentUser.name == user.name &&
      currentUser.email == user.email &&
      currentUser.password == user.password
    ) {
      navigation?.navigate("Main Page");
    } else {
      alert("Usuario incorrecto.");
    }
  };
  const handleOnChange = (value: string, input: string) => {
    setCurrentUser((prevState) => ({ ...prevState, [input]: value }));
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={currentUser.name}
          onChangeText={(name) => handleOnChange(name, "name")}
        />
        <TextInput
          placeholder="Email"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={currentUser.email}
          onChangeText={(email) => handleOnChange(email, "email")}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={currentUser.password}
          onChangeText={(password) => handleOnChange(password, "password")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textStyle} onPress={fetchLoginUser}>
            Send
          </Text>
        </Pressable>
        <Pressable style={styles.buttonStyle} onPress={returnWelcomeScreen}>
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
