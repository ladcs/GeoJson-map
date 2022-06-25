const sendUserLogin = {
  userEmail: 'testemail@test.com',
  password: '123456',
};

const sendErrorEmail = {
  userEmail: 'emailerror@test.com',
  password: '123456',
}

const sendErrorPassword = {
  userEmail: 'testemail@test.com',
  password: '123444',
}

const userLogged = {
  id: 1,
  userName: 'test',
  email: 'testemail@test.com',
  passwordHash: '$2a$12$pvK8XoeYMIqgGov6jaQGmu1rQw/GSB01Y9qFFdsUMpiVe8lo2ItY2',
}

export { sendUserLogin, userLogged, sendErrorPassword, sendErrorEmail }