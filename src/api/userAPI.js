export const userAPI = {
  register: (params) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ SIGN_UP_STATUS: 200 });
      }, 1000);
    });
  },
};