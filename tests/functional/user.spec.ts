

import supertest from 'supertest'
import app from '../../dist/main/config/app'

describe('POST user', () => {
  it('works', () =>
    supertest(app)
      .post('/api/users/')
      .expect('Content-Type', /json/)
      .expect(200)
    )
});