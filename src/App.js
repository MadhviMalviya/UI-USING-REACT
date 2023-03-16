import './App.css';
import Email from './components/Email/Email';
import Login from './components/Login/Login';
import Links from './components/Links/Links';
import Checkbox from './components/Checkbox/Checkbox';
import Password from './components/Password';


function App() {
  return (
    <div className="App">

    <h1>Welcome!</h1> 
    <p>Login your account</p>

    <Email/> 
    <Password/>
    <Checkbox/><br/>
    <Login/><br/><hr></hr>
    <Links/>


    </div>
  );
}

export default App;
