import { makeCreateTodoController, makeUpdateTodoController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { auth } from '@/main/middlewares'
const { body } = require('express-validator');

export default (router: Router): void => {
//   router.get(
//     '/projects/',
//     auth,
//     adaptRoute(makeLoadProjectsByUserController()))
//   router.get(
//     '/projects/:id',
//     auth,
//     adaptRoute(makeLoadProjectController()))
  router.post(
    '/todos/',
    auth,
    body('description').not().isEmpty(),
    body('list_id').not().isEmpty(),
    adaptRoute(makeCreateTodoController()))

  router.put(
    '/todos/:id',
    auth,
    adaptRoute(makeUpdateTodoController()))
}