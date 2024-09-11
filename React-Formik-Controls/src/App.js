import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
     {/* <FormikContainer></FormikContainer> */}
     {/* <LoginForm></LoginForm> */}
     <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
