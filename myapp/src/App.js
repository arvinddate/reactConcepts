import './App.css';
import ApiCallWithDbounce from './componets/ApiCalls/ApiCallWithDbounce';
import MainPage from './componets/Context/MainPage';
import ApiCall from './componets/PractApiCall/ApiCall';
import PropDrill from './componets/propDrill/PropDrill';

function App() {
  return (
    <div >
      <PropDrill />
      <p>---- useContex----------</p>
      <MainPage />

      <p>-------ApiCall-------</p>
      {/* <ApiCallWithDbounce /> */}

      <ApiCall />

    </div>
  );
}

export default App;
