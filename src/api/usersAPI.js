import useFetch from '../utils/useFetch';

// eslint-disable-next-line react-hooks/rules-of-hooks
const fetch = useFetch();
export const usersAPI = {
  read: async (url) => {
    const data = await fetch.read(url);
    return data.json();
  },
  create: async (url, body) => {
    const data = await fetch.create(url, body);
    return data;
  },
  update: async (url, body) => {
    const data = await fetch.update(url, body);
    return data;
  },
  delete: async (url, body) => {
    const data = await fetch.delete(url, body);
    return data;
  },
};
