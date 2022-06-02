export const userAPI = {
  register: (params) => {
    console.log(`Body: ${params}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200 });
      }, 1000);
    });
  },
  login: (params) => {
    console.log(`Body: ${JSON.stringify(params)}`);
    if (params.email === 'admin@nfq.asia' && params.password === 'P@sswordis1')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            token: 'chungtalaluquyotanrungsauotannuicao',
            email: params.email,
            role: 'admin',
          });
        }, 1500);
      });
    else if (
      params.email === 'dangkhoa.duong@nfq.asia' &&
      params.password === 'P@sswordis1'
    )
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            token: 'chungtalaluquyotanrungsauotannuicao',
            email: params.email,
            role: 'member',
          });
        }, 1500);
      });
    else
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 401 });
        }, 1500);
      });
  },
};
