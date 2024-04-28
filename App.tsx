import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./screens/welcomescreen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import ChatMenuScreen from "./screens/chatmenuscreen/ChatMenuScreen";
import ChatScreen from "./screens/chatscreen/ChatScreen";

/**
 * This is the main component of the application,
 * it has a browser to go to the pages created.
 * The main page when starting the application is
 * the Welcome screen.
 */

export default function App() {
  const Stack = createNativeStackNavigator();
  const stackOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackOptions}>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main Page" component={ChatMenuScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
