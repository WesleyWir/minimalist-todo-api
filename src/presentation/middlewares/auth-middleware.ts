

import { Middleware, HttpResponse, forbidden, ok, serverError } from '@/presentation/contracts'
import { AccessDeniedError } from '@/presentation/errors'
import { LoadUserByToken } from '@/domain/usecases'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadUserByToken: LoadUserByToken,
    private readonly role?: string
  ) {}

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { authorization } = request
      if (authorization) {
        const user = await this.loadUserByToken.load(authorization, this.role)
        if (user) {
          return ok({ auth_user_id: user.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    authorization?: string
  }
}