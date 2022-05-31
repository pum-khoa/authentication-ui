import './general.css';
import { useGlobalData } from './components/GlobalDataProvider/GlobalDataProvider';
import Loader from './components/Loader/Loader';
import Wave from './components/Wave/Wave';
import SignUp from './pages/SignUp/SignUp';

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
