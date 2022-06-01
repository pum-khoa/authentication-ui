import './general.css';
import { useGlobalData } from './components/GlobalDataProvider/GlobalDataProvider';
import Loader from './components/Loader/Loader';
import Wave from './components/Wave/Wave';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const ContextData = useGlobalData();

  return (
    <BrowserRouter>
      <Loader isLoading={ContextData.isLoading} />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <Wave />
    </BrowserRouter>
  );
}

export default App;
