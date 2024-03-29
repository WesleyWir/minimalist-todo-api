import { makeCreateProjectController, makeLoadProjectController, makeDeleteProjectController, makeUpdateProjectController, makeLoadProjectsByUserController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { auth } from '@/main/middlewares'
const { body } = require('express-validator');

export default (router: Router): void => {
  router.get(
    '/projects/',
    auth,
    adaptRoute(makeLoadProjectsByUserController()))
  router.get(
    '/projects/:id',
    auth,
    adaptRoute(makeLoadProjectController()))
  router.post(
    '/projects/',
    auth,
    body('name').not().isEmpty(),
    adaptRoute(makeCreateProjectController()))

  router.put(
    '/projects/:id',
    auth,
    adaptRoute(makeUpdateProjectController()))

  router.delete(
    '/projects/:id',
    auth,
    adaptRoute(makeDeleteProjectController()))
}