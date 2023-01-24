import { CreateList } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts'
import { CreateListRequest } from '@/presentation/requests'

export class CreateListController implements Controller {
  constructor (private readonly createList: CreateList) {}

  async handle (request: CreateListRequest): Promise<HttpResponse<[]>> {
    try {
      const data = await this.createList.create(request)
      return created(data)
    } catch (error) {
      return serverError(error)
    }
  }
}