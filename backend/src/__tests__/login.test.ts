import { jest, test, expect, it } from '@jest/globals';
import request from 'supertest';
import { App } from '../app';
import { sendUserLogin, userLogged, sendErrorPassword, sendErrorEmail } from './mock/user';

jest.mock('../database/models/user');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const User = require('../database/models/user');
const loggedOkMock = jest.fn()
  .mockReturnValue(undefined)
  .mockReturnValueOnce(userLogged)
  .mockReturnValueOnce(userLogged);
User.findOne.mockReturnValue(loggedOkMock);

test('Authentication', () => {
  it('Authentication Okay', async () => {
    const res = await request(App)
    .post('/login')
    .send(sendUserLogin);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('password');
    expect(res.body.id).toBe(1);
    expect(res.body.useName).toBe('test')
  })

  it('Authentication, password not Okay', async () => {
    const res = await request(App)
    .post('/login')
    .send(sendErrorPassword);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Incorrect email or password');
  });

  it('Authentication, password not Okay', async () => {
    const res = await request(App)
    .post('/login')
    .send(sendErrorEmail);

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Incorrect email or password');
  })
});



