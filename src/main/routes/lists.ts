import { makeCreateListController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { auth } from '@/main/middlewares'
const { body } = require('express-validator');

export default (router: Router): void => {
  router.post(
    '/lists/',
    auth,
    body('name').not().isEmpty(),
    body('project_id').not().isEmpty(),
    adaptRoute(makeCreateListController()))

//   router.put(
//     '/projects/:id',
//     auth,
//     adaptRoute(makeUpdateProjectController()))

//   router.delete(
//     '/projects/:id',
//     auth,
//     adaptRoute(makeDeleteProjectController()))
}