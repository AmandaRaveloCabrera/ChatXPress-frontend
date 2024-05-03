export const getInitRequest = (token?: string): RequestInit => {
  if (token) {
    return {
      method: "GET",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

export const postInitRequest = (body?: object, token?: string): RequestInit => {
  if (body) {
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
  }

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};
