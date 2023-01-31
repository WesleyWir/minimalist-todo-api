import { LoadList } from '@/domain/usecases'
import { LoadListUseCase } from '@/data/usecases'
import { ListsRepository } from '@/infra/database/prisma/repositories'

export const makeLoadListUseCase = (): LoadList => {
  const listsRepository = new ListsRepository()
  return new LoadListUseCase(listsRepository)
}