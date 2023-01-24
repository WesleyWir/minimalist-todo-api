import { List } from '@/domain/models'

export interface CreateList {
  create: (data: CreateList.Params) => Promise<CreateList.Result>
}

export namespace CreateList {
  export type Params = List
  export type Result = List
}