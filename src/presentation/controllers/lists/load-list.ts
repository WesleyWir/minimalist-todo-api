import { LoadList } from '@/domain/usecases'
import { Controller, HttpResponse, ok } from '@/presentation/contracts'

export class LoadListController implements Controller {
  constructor (private readonly loadList: LoadList) {}

  async handle (request: any): Promise<HttpResponse<[]>> {
    try {
      const data = await this.loadList.load(parseInt(request.id), request.auth_user_id)
      return ok(data)
    } catch (error) {
      return error
    }
  }
}