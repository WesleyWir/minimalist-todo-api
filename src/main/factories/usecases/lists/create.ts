import { CreateList } from '@/domain/usecases'
import { CreateListUseCase } from '@/data/usecases'
import { ListsRepository } from '@/infra/database/prisma/repositories'

export const makeCreateListUseCase = (): CreateList => {
  const listsRepository = new ListsRepository()
  return new CreateListUseCase(listsRepository)
}