const newMockUser = {
  userName: 'new test user',
  email: 'newtestuser@teste.com',
  password: '123456'
}

const newMockUserWithoutUserName = {
  email: 'newtestuser@teste.com',
  password: '123456'
}

const newMockUserWithoutPassword = {
  userName: 'new test user',
  email: 'newtestuser@teste.com',
}

const newMockUserWithoutEmail = {
  userName: 'new test user',
  password: '123456'
}

const newMockUserInvalidUser = {
  userName: 123,
  email: 'newtestuser@teste.com',
  password: '123456'
}

const newMockUserInvalidEmail = {
  userName: 'new test user',
  email: 'newtestuser',
  password: '123456'
}

const newMockUserInvalidPasswor = {
  userName: 'new test user',
  email: 'newtestuser',
  password: 123
}

const newUserReturn = {
  userName: 'new test user',
  email: 'newtestuser@teste.com',
  passwordHash: '$2a$12$pvK8XoeYMIqgGov6jaQGmu1rQw/GSB01Y9qFFdsUMpiVe8lo2ItY2',
  id: 1,
}

export {
  newMockUser,
  newUserReturn,
  newMockUserInvalidPasswor,
  newMockUserInvalidEmail,
  newMockUserInvalidUser,
  newMockUserWithoutEmail,
  newMockUserWithoutPassword,
  newMockUserWithoutUserName }