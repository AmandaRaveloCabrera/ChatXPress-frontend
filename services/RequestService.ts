export const getInitRequest = (cookie: string): RequestInit => {
  return {
    method: "GET",
    headers: {
      Authorization: cookie,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

export const postInitRequestLogin = (
  body?: object,
  cookie?: string
): RequestInit => {
  if (body) {
    if (cookie) {
      return {
        credentials: "include",
        method: "POST",
        headers: {
          Authorization: cookie,
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
