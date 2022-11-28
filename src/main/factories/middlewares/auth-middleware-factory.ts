

import { makeLoadUserByTokenUseCase } from '@/main/factories'
import { Middleware } from '@/presentation/contracts'
import { AuthMiddleware } from '@/presentation/middlewares'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeLoadUserByTokenUseCase(), role)
}