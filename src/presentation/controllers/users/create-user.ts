import { CreateUser, LoadUserByEmail } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created, badRequest } from '@/presentation/contracts'
import { CreateUserRequest } from '@/presentation/requests'

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser, private readonly loadUserByEmail: LoadUserByEmail) { }

  async handle(request: CreateUserRequest): Promise<HttpResponse<[]>> {
    try {
      const userAlreadyEmail = await this.loadUserByEmail.load(request.email);
      if (userAlreadyEmail) {
        return badRequest({
          message: 'User email already being used.'
        });
      }

      const data = await this.createUser.create(request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}