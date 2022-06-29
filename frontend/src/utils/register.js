import api from '../services/api';
const endpoit = '/login/register';

async function requestToLogin(body) {
  const { email, password, userName} = body;
  const { data } = await api.post(endpoit, { email, userName, password })
  return data;
}

async function handleOnClickToRegister(e, setLogged, setUser, userIn) {
  e.preventDefault();
  try {
    const { token, user } = await requestToLogin(userIn);
    setUser({ password:'',userName:'', email:'' })
    localStorage.setItem('user', JSON.stringify({ ...user }));
    api.defaults.headers.common.authorization = token;
    setLogged(true);
  } catch (err) {
    setLogged(false);
  }
}

export default handleOnClickToRegister;