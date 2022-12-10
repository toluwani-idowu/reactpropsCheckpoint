// import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

import Toluwani from '../src/profile/img/Toluwani.JPG'

function App() {
  return (
    <div className="App">
      <Profile  fullName="IDOWU TOLUWANI BUKOLA" profession="Professional and Makeup Artist" bio="Money Must be made">
    <img src={Toluwani} width={250} height={200}padding={30}  alt=''/>
    </Profile>
    </div>
  );
}

export default App;
