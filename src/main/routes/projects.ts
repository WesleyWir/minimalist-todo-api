import { makeCreateProjectController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { auth } from '@/main/middlewares'
const { body } = require('express-validator');

export default (router: Router): void => {
  router.post(
    '/projects/',
    auth,
    body('name').not().isEmpty(),
    adaptRoute(makeCreateProjectController()))
}