import React, { useState, useContext, useEffect } from 'react';
import Input from '../components/Input';
import MapContext from '../context/mapContext';
import { useNavigate } from 'react-router-dom';
import handleOnClickToRegister from '../utils/register';

function Register() {
  const [user, setUser] = useState({
    email: '',
    userName: '',
    password: '',
  });
  const { setLogged, logged } = useContext(MapContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(logged) {
      return navigate('/map')
    }
  }, [logged]);
  const { email, userName, password } = user;
  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <h2>Cadastro</h2>
      <form className="d-flex flex-column align-items-center login-form mt-4">
        <Input
          label="Email"
          type="text"
          value={ email }
          id="email"
          onChange={ handleOnChange }
          className="border-top border-right border-left p-2"
        />
          <Input
            label="Nome do Usuário"
            type="text"
            value={ userName }
            id="userName"
            onChange={ handleOnChange }
            className="border-top border-right border-left p-2"
          />
        <Input
          label="Senha"
          type="password"
          value={ password }
          id="password"
          onChange={ handleOnChange }
          className="border-top border-right border-left p-2"
        />
        <button
          type="button"
          onClick={(e) => handleOnClickToRegister(e, setLogged, setUser, user) }
          className="buttonLogin"
          value="register"
        >
          cadastrar-se
        </button>
      </form>
    </main>
  );
}

export default Register;
