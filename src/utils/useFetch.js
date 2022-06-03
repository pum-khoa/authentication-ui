import { message } from './message';

function returnResponseData(result) {
  return result;
}

function messageError(error) {
  message('error', error, 3000);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const useFetch = () => {
  return {
    read: (url) => {
      const response = fetch(url)
        .then(validateResponse)
        .then(returnResponseData)
        .catch(messageError);

      return response;
    },
    create: (url, body) => {
      const response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(validateResponse)
        .then(returnResponseData)
        .catch(messageError);

      return response;
    },
    update: (url, body) => {
      const response = fetch(`${url}/${body.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(validateResponse)
        .then(returnResponseData)
        .catch(messageError);

      return response;
    },
    delete: (url, id) => {
      const response = fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
        .then(validateResponse)
        .then(returnResponseData)
        .catch(messageError);

      return response;
    },
  };
};

export default useFetch;
