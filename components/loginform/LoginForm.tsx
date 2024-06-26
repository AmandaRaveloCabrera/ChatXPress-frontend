import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { UserService } from "../../services/UserService";
import { currentUserContext } from "../../context/CurrentUserContext";
import { AsyncStore } from "../../services/AsyncStoreService";
import Colors from "../../assets/styles/Colors";

/**
 * The loginForm component is responsible for displaying
 * and validating the login form used in the login screen.
 */

const LoginForm = () => {
  const navigation = React.useContext(NavigationContext);
  const { setCurrentUser } = React.useContext(currentUserContext);
  const initialUserState = {
    name: "",
    email: "",
    password: "",
    nameRole: "user",
  };
  const [userLogin, setUserLogin] = React.useState(initialUserState);
  const returnWelcomeScreen = () => {
    navigation?.navigate("Home");
  };
  const fetchLoginUser = () => {
    const fetchData = async () => {
      const data = await UserService.login({
        email: userLogin.email,
        password: userLogin.password,
        nameRole: userLogin.nameRole,
      });

      if (data != null) {
        setCurrentUser(data);
        await AsyncStore.storeData(data.token);

        navigation?.navigate("Main Page");
      } else {
        alert("Incorrect user. Please try again!");
      }
    };

    fetchData();
    setUserLogin(initialUserState);
  };
  const handleOnChange = (value: string, input: string) => {
    setUserLogin((prevState) => ({ ...prevState, [input]: value }));
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Name"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={userLogin.name}
          onChangeText={(name) => handleOnChange(name, "name")}
        />
        <TextInput
          placeholder="Email"
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={userLogin.email}
          onChangeText={(email) => handleOnChange(email, "email")}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.inputStyle, styles.textStyle]}
          placeholderTextColor={"#CCC"}
          value={userLogin.password}
          onChangeText={(password) => handleOnChange(password, "password")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonStyle} onPress={fetchLoginUser}>
          <Text style={styles.textStyle}>Send</Text>
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
    backgroundColor: Colors.background,
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
  inputsContainer: {
    height: 230,
    width: "75%",
    justifyContent: "space-around",
  },

  inputStyle: {
    borderBottomWidth: 4,
    borderBottomColor: Colors.letterPrimary,
  },
  buttonStyle: {
    height: 60,
    width: 130,
    borderWidth: 2,
    borderColor: Colors.letterPrimary,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: Colors.letterPrimary,
    fontSize: 18,
  },
});
