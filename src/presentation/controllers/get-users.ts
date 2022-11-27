// import { LastRankingLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'

export class GetUsersController implements Controller {
//   constructor (private readonly lastRankingLoader: LastRankingLoader) {}

  async handle (): Promise<HttpResponse<[]>> {
    try {
      return ok([])
    } catch (error) {
      return serverError(error)
    }
  }
}