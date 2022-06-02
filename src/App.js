import './general.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useGlobalData } from './components/GlobalDataProvider/GlobalDataProvider';
import Loader from './components/Loader/Loader';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import Setting from './pages/Setting/Setting';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const ContextData = useGlobalData();
  const role = ContextData.selectRole();
  return (
    <BrowserRouter>
      <div className="app">
        <Loader isLoading={ContextData.isLoading} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            {role === 'admin' && <Route path="setting" element={<Setting />} />}
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
