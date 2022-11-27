import { CreateUser } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { CreateUserRequest } from '@/presentation/requests/create-user'

export class CreateUserController implements Controller {
  constructor (private readonly createUser: CreateUser) {}

  async handle (request: CreateUserRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.createUser.create(request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}