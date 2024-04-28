import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (cookie: string) => {
  try {
    await AsyncStorage.setItem("my-cookie", cookie);
    console.log("Se ha añadido la cookie al dispositivo correctamente-");
  } catch (error) {
    console.log("Error al guardar la cookie");
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem("my-cookie");
    console.log("Se ha eliminado la cookie correctamente.");
  } catch (error) {}
};

const getCookie = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const AsyncStore = {
  storeData,
  removeData,
  getCookie,
};
