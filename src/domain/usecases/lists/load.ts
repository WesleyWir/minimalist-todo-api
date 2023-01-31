import { List } from '@/domain/models'

export interface LoadList {
  load: (id: number, userId: number) => Promise<LoadList.Result>
}

export namespace LoadList {
  export type Params = List
  export type Result = List
}