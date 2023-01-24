import { CreateList } from '@/domain/usecases'

export interface CreateListRepository {
  create: (data: CreateListRepository.Params) => Promise<CreateListRepository.Result>
}

export namespace CreateListRepository {
  export type Params = CreateList.Params
  export type Result = CreateList.Result
}