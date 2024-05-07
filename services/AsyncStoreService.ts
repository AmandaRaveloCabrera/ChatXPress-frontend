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

const getToken = async () => {
  return await AsyncStorage.getItem("jwt");
};

export const AsyncStore = {
  storeData,
  removeData,
  getToken,
};
