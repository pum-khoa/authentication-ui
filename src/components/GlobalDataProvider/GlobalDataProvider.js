import React, { useContext, useState } from 'react';
import { userAPI } from '../../api/userAPI';
import { message } from '../../utils/message';

const initialState = {};
const GlobalDataContext = React.createContext(initialState);

function GlobalDataProvider(props) {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const handleLoading = (value) => {
    setLoading(value);
  };

  const handleUser = (value) => {
    setUser(value);
  };

  const clearUser = () => {
    setUser(null);
  };

  const selectRole = () => {
    if (user) return user.role;
  };

  const signUp = async (params) => {
    setLoading(true);
    const signUpData = await userAPI.register(params);
    if (signUpData) {
      setLoading(false);
      message('success', 'Sign up success, you can sign in now!', 2000);
    }
  };
  const signIn = async (params) => {
    setLoading(true);
    const signUpData = await userAPI.login(params);
    return signUpData;
  };

  const providerValues = {
    isLoading,
    user,
    handleLoading,
    handleUser,
    clearUser,
    selectRole,
    signUp,
    signIn,
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
