/**
 * the url of the server to which we connect to
 */
const IP = "192.168.0.23";
const URL_API = `http://${IP}:3002/api/v1`;
const URL_SOCKET = `http://${IP}:3001`;

const Config = {
  URL_API,
  URL_SOCKET,
};

export default Config;
