/**
 * This function is the parameters needed to make a GET call to the api.
 * @param token -> Token needed to make requests.
 * @returns an init request
 */
export const getInitRequest = (token: string): RequestInit => {
  return {
    method: "GET",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

/**
 * This function is the parameters needed to make a POST call to the api.
 * @param body -> The body we need to send
 * @param token -> Token needed to make requests. This is optional
 * @returns An init request
 */

export const postInitRequest = (body: object, token?: string): RequestInit => {
  if (token) {
    return {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }
  return {
    credentials: "include",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

/**
 * This function is the parameters needed to make a PUT call to the api.
 * @param body -> The body we need to send
 * @param token -> Token needed to make requests.
 * @returns An init request
 */

export const putInitRequest = (body: object, token: string): RequestInit => {
  return {
    method: "PUT",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
