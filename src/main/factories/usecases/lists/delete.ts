import { DeleteList } from '@/domain/usecases'
import { DeleteListUseCase } from '@/data/usecases'
import { ListsRepository } from '@/infra/database/prisma/repositories'

export const makeDeleteListUseCase = (): DeleteList => {
  const listsRepository = new ListsRepository()
  return new DeleteListUseCase(listsRepository, listsRepository)
}