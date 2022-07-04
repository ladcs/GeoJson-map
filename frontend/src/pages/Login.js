import React, { useState, useContext, useEffect } from 'react';
import Input from '../components/Input';
import MapContext from '../context/mapContext';
import handleOnClickToLogin from '../utils/login';
import { useNavigate } from 'react-router-dom';
import '../styles/loginRegist.css'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [userError, setUserError] = useState(false);
  const { setLogged, logged, toMap, setToMap } = useContext(MapContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(logged) {
      return navigate('/map')
    }
  }, [logged]);
  const { email, password } = user;
  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const register = () => navigate('/register')

  return (
    <div className="centered d-flex flex-column justify-content-center align-items-center">
      <form onSubmit={ (e) => handleOnClickToLogin(e, setLogged, setUser, user, setUserError, setToMap, toMap) }
      className="centered d-flex flex-column align-items-center login-form mt-4">
        <h1>Login</h1>
        <Input
          label="Email"
          type="text"
          value={ email }
          testId="email-input"
          id="email"
          onChange={ handleOnChange }
          className="border-right border-left p-2"
        />
        <Input
          label="Senha"
          type="password"
          value={ password }
          testId="password-input"
          id="password"
          onChange={ handleOnChange }
          className="border-right border-left p-2"
        />
        <button
          type="submit"
          onClick={ (e) => handleOnClickToLogin(e, setLogged, setUser, user, setUserError, setToMap, toMap) }
          className="buttonLogin"
          value="Login"
          >
          Entrar
        </button>
        <button
          type="button"
          onClick={ register }
          className="buttonRegister"
          value="register"
          >
          cadastrar-se
        </button>
      { userError && <p>User ou Password inválido!</p>}
      </form>
    </div>
  );
}

export default Login;
