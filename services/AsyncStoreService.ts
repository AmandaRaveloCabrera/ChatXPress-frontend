import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (resCookie: string) => {
  try {
    await AsyncStorage.setItem("jwt", resCookie);
    console.log("Se ha añadido la cookie al dispositivo correctamente");
  } catch (error) {
    console.log("Error al guardar la cookie");
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Se ha eliminado la cookie correctamente.");
  } catch (error) {}
};

/*
const getCookie = async () => {
  try {
    const resCookie = await AsyncStorage.getItem("jwt");
    if (resCookie != null) {
      setcookie(resCookie);
    } else {
      setcookie("");
    }
  } catch (error) {
    setcookie("");
  }
};
*/

export const AsyncStore = {
  storeData,
  removeData,
};
