import api from '../services/api';
const endpoit = '/login';

async function requestToLogin(body) {
  const { email, password} = body;
  const { data } = await api.post(endpoit, { email, password })
  return data;
}

async function handleOnClickToLogin(e, setLogged, setUser, userIn, setErrorLogin) {
  e.preventDefault();
  try {
    const { token, user } = await requestToLogin(userIn);
    setErrorLogin(false);
    setUser({ password:'', email:'' })
    localStorage.setItem('user', JSON.stringify({ ...user }));
    api.defaults.headers.common.authorization = token;
    setLogged(true);
  } catch (err) {
    setLogged(false);
    setErrorLogin(true);
  }
}

export default handleOnClickToLogin;