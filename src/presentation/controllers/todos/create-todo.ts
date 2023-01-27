import { CreateTodo } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { CreateTodoRequest } from '@/presentation/requests'

export class CreateTodoController implements Controller {
  constructor (private readonly createTodo: CreateTodo) {}

  async handle (request: CreateTodoRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.createTodo.create(request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}