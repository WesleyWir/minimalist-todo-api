import { Controller, HttpResponse } from '@/presentation/contracts'
import { serverError, unauthorized, ok } from '@/presentation/contracts'
import { Authentication } from '@/domain/usecases'
import { LoginControllerRequest } from '@/presentation/requests'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
  ) {}

  async handle (request: LoginControllerRequest.Request): Promise<HttpResponse> {
    try {
      const authenticationModel = await this.authentication.auth(request)
      if (!authenticationModel) {
        return unauthorized()
      }
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}
