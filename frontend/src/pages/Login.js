import React, { useState, useContext, useEffect } from 'react';
import Input from '../components/Input';
import MapContext from '../context/mapContext';
import handleOnClickToLogin from '../utils/login';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [userError, setUserError] = useState(false);
  const { setLogged, logged } = useContext(MapContext);
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

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <h2>Login</h2>
      <form className="d-flex flex-column align-items-center login-form mt-4">
        <Input
          label="Email"
          type="text"
          value={ email }
          testId="email-input"
          id="email"
          onChange={ handleOnChange }
          className="border-top border-right border-left p-2"
        />
        <Input
          label="Senha"
          type="password"
          value={ password }
          testId="password-input"
          id="password"
          onChange={ handleOnChange }
          className="border-top border-right border-left p-2"
        />
        <button
          type="button"
          onClick={ (e) => handleOnClickToLogin(e, setLogged, setUser, user, setUserError) }
          className="buttonLogin"
          value="Login"
        >
          Login
        </button>
      { userError && <p>User ou Password inválido!</p>}
      </form>
    </main>
  );
}

export default Login;
