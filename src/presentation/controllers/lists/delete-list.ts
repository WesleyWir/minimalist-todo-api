import { DeleteList } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'

export class DeleteListController implements Controller {
  constructor (private readonly deleteList: DeleteList) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.deleteList.delete(parseInt(request.id), request.auth_user_id)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}