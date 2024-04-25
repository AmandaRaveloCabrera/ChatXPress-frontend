export const getInitRequest = (): RequestInit => {
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

export const postInitRequest = (body?: object): RequestInit => {
  if (body) {
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
