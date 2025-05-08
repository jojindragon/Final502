import mainImg from './mainImg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt='' src={mainImg}
       style={{width:'400px'}} />
      <h2><b>React+SpringBoot 자동 배포 실습</b></h2>
    </div>
  );
}

export default App;
