const sendUserLogin = {
  email: 'testemail@test.com',
  password: '123456',
};

const sendErrorEmail = {
  email: 'emailerror@test.com',
  password: '123456',
}

const sendErrorPassword = {
  email: 'testemail@test.com',
  password: '123444',
}

const sendErrorNotEmail = {
  password: '123456',
}

const sendErrorNotPassword = {
  email: 'testemail@test.com'
}

const userLogged = {
  id: 1,
  userName: 'test',
  email: 'testemail@test.com',
  passwordHash: '$2a$12$pvK8XoeYMIqgGov6jaQGmu1rQw/GSB01Y9qFFdsUMpiVe8lo2ItY2',
}

export { sendUserLogin, userLogged, sendErrorPassword, sendErrorEmail, sendErrorNotEmail, sendErrorNotPassword }