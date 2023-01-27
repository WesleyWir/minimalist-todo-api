import { List } from '@/domain/models'

export interface DeleteList {
  delete: (id: number, userId: number) => Promise<DeleteList.Result>
}

export namespace DeleteList {
  export type Result = List
}