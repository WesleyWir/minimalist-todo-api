// import { LastRankingLoaderService } from '@/data/services'
// import { FakeRankingRepository } from '@/infra/repositories'
import { GetUsersController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'

export const makeGetUsersController = (): Controller => {
//   const repo = new FakeRankingRepository()
//   const loader = new LastRankingLoaderService(repo)
  return new GetUsersController()
}