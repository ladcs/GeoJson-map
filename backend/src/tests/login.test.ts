/*
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
  sendUserLogin,
  sendErrorEmail,
  sendErrorPassword,
  userLogged,
  sendErrorNotEmail,
  sendErrorNotPassword } from './mock/user';

const { expect } = chai;

describe('route Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userLogged as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Login sucess', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(sendUserLogin);
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body.userName).to.be.equal(userLogged.userName);
    expect(chaiHttpResponse.body.email).to.be.equal(userLogged.email);
    expect(chaiHttpResponse.body.id).to.be.equal(userLogged.id);
  });
});

describe('route login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userLogged as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('wrong pass', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(sendErrorPassword);
  
    expect(chaiHttpResponse.status).to.be.equal(401);
  });
})

describe('route login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(null);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('wrong email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(sendErrorEmail);
    
    expect(chaiHttpResponse.status).to.be.equal(401);
    })
});

describe('route login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(null);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })
  it('not email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(sendErrorNotEmail);

    expect(chaiHttpResponse.status).to.be.equal(400);
  })
});

describe('route login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(userLogged as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('not password', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(sendErrorNotPassword);

    expect(chaiHttpResponse.status).to.be.equal(400);
  })
});
*/