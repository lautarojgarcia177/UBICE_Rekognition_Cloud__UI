export const fakeAuth = ({ username, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "lautaro" && password === "garcia") {
        resolve({
          data: {
            token: "asdasdasdasd",
            expiresIn: 60,
            tokenType: "Bearer",
          },
        });
      } else {
        reject();
      }
    }, 250);
  });
