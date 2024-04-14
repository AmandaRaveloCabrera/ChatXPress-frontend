import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./screens/welcomescreen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import LoginScreen from "./screens/loginscreen/LoginScreen";

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
