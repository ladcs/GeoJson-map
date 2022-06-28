import sinon from 'sinon';
import chai from 'chai';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

import { 
  newMockUser,
  newUserReturn,
  newMockUserInvalidPasswor,
  newMockUserInvalidEmail,
  newMockUserInvalidUser,
  newMockUserWithoutEmail,
  newMockUserWithoutPassword,
  newMockUserWithoutUserName } from './mock/newUser';

const { expect } = chai;

const ROUTE = '/login/register';

describe('route Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "create")
      .resolves(newUserReturn as User);
  });

  after(()=>{
    (User.create as sinon.SinonStub).restore();
  })

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUser);
    
    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body.userName).to.be.equal(newUserReturn.userName);
    expect(chaiHttpResponse.body.email).to.be.equal(newUserReturn.email);
    expect(chaiHttpResponse.body.id).to.be.equal(newUserReturn.id);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserInvalidPasswor);

    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserInvalidEmail);
    
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserInvalidUser);
    
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserWithoutEmail);
    
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserWithoutPassword);
    
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});

describe('route Login', () => {
  let chaiHttpResponse: Response;

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post(ROUTE)
      .send(newMockUserWithoutUserName);
    
    expect(chaiHttpResponse.status).to.be.equal(400);
  });
});