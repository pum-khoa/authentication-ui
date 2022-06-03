import './general.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useGlobalData } from './components/GlobalDataProvider/GlobalDataProvider';
import Loader from './components/Loader/Loader';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import Setting from './pages/Setting/Setting';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import { useEffect } from 'react';
import { userAPI } from './api/userAPI';
import Users from './pages/Users/Users';
import 'antd/dist/antd.css';

function App() {
  const ContextData = useGlobalData();
  const role = ContextData.selectRole();
  const location = useLocation();

  useEffect(() => {
    if (!role) {
      const getUserData = async (token) => {
        const resData = await userAPI.fetchUserData(token);
        ContextData.handleUser(resData);
      };
      getUserData(
        localStorage.getItem('token') || sessionStorage.getItem('token')
      );
    }
  }, [ContextData, location.pathname, role]);
  return (
    <div className="app">
      <Loader isLoading={ContextData.isLoading} />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />

        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          {role === 'admin' && (
            <>
              <Route path="setting" element={<Setting />} />
              <Route path="users" element={<Users />} />
            </>
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
