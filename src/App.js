import logo from './logo.svg';
import './App.css';
import Counter from './component/useState/Counter';
import Info from './component/useState/Info';
import InfoPlus from './component/useEffect/InfoPlus';
import InfoPlusMount from './component/useEffect/InfoPlusMount';
import InfoPlusOnlyName from './component/useEffect/InfoPlusOnlyName';
import ReduxTest from './component/reduxTest';

function App() {
  return (
    <div className="App">
      <ReduxTest />
      {/* <Counter />
      <Info />
      <InfoPlus />
      <InfoPlusMount />
      <InfoPlusOnlyName/> */}
    </div>
  );
}

export default App;
