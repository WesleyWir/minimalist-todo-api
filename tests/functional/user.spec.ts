

import supertest from 'supertest'
import app from '../../dist/main/config/app'

describe('POST user', () => {
  const userPayload = {
    "name": "Wesley Wirmond",
    "email": "wesleywirmond@gmail.com",
    "password": "12345678",
    "password_confirmation": "12345678"
  };
  it('works', () =>
    supertest(app)
      .post('/api/users/signup/')
      .send(userPayload)
      .expect('Content-Type', /json/)
      .expect(200)
  )
});