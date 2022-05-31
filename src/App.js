import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { useGlobalData } from './components/GlobalDataProvider/GlobalDataProvider';
import Loader from './components/Loader/Loader';
import Wave from './components/Wave/Wave';
import SignUp from './pages/SignUp/SignUp';
import { message } from './utils/message';

function App() {
  const ContextData = useGlobalData();

  return (
    <>
      <Loader isLoading={ContextData.isLoading} />
      <SignUp />
      <Wave />
    </>
  );
}

export default App;
