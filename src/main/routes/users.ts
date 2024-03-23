import { makeCreateUserController, makeForgotPasswordController, makeLoginController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
const { body } = require('express-validator');

export default (router: Router): void => {
  router.post(
    '/users/signup',
    body('name').not().isEmpty(),
    body('password').not().isEmpty(),
    body('password_confirmation').custom((value: any, { req }: any) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }  
      return true;
    }),
    body('email').isEmail(),
    adaptRoute(makeCreateUserController()))

  router.post('/users/login', 
    body('email').not().isEmpty(),
    body('email').isEmail(),
    body('password').not().isEmpty(),
    adaptRoute(makeLoginController())
  )

  router.post('/users/forgot', 
    body('email').not().isEmpty(),
    body('email').isEmail(),
    adaptRoute(makeForgotPasswordController())
  )
}