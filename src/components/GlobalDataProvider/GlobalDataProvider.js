import React, { useContext, useState } from 'react';
import { userAPI } from '../../api/userAPI';
import { message } from '../../utils/message';

const initialState = {};
const GlobalDataContext = React.createContext(initialState);

function GlobalDataProvider(props) {
  const [isLoading, setLoading] = useState(false);

  const signUp = async (params) => {
    setLoading(true);
    const signUpData = await userAPI.register(params);
    if (signUpData) {
      setLoading(false);
      document.getElementById('form-sign-up').reset();
      message('success', 'Sign up success, you can sign in now!', 2000);
    }
  };

  const providerValues = {
    isLoading,
    signUp,
  };

  return (
    <GlobalDataContext.Provider value={providerValues}>
      {props.children}
    </GlobalDataContext.Provider>
  );
}

function useGlobalData() {
  return useContext(GlobalDataContext);
}

export default GlobalDataContext;
export { GlobalDataProvider, useGlobalData };
