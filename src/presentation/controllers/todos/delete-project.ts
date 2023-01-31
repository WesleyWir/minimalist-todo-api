import { DeleteTodo } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'

export class DeleteTodoController implements Controller {
  constructor (private readonly deleteTodo: DeleteTodo) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.deleteTodo.delete(parseInt(request.id), request.auth_user_id)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}