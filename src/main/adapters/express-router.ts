import { Controller } from '@/presentation/contracts'
const { validationResult } = require('express-validator');

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      auth_user_id: req.auth_user_id
    }
    const httpResponse = await controller.handle(request)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}