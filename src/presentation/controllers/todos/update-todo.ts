import { UpdateTodo } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { UpdateTodoRequest } from '@/presentation/requests'

export class UpdateTodoController implements Controller {
  constructor (private readonly updateTodo: UpdateTodo) {}

  async handle (request: UpdateTodoRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.updateTodo.update(parseInt(request.id), request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}