import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * This function saves in storage the token that we pass as parameter
 * @param token -> Token we want to save
 */

const storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem("jwt", token);
    console.log("Se ha añadido el token al dispositivo correctamente");
  } catch (error) {
    console.log("Error al guardar el token");
  }
};
/**
 * This function deletes the token we have previously saved.
 */

const removeData = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Se ha eliminado el token correctamente.");
  } catch (error) {
    console.log("Error al eliminar el token");
  }
};
/**
 * This function obtains the token that we have previously stored
 * @returns The stored token
 */

const getToken = async () => {
  return await AsyncStorage.getItem("jwt");
};

/**
 * The object that has within it the above-mentioned functions
 */

export const AsyncStore = {
  storeData,
  removeData,
  getToken,
};
