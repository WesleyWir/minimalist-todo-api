import { User } from '@/domain/models'

export interface CreateUser {
  create: (data: CreateUser.Params) => Promise<CreateUser.Result>
}

export namespace CreateUser {
  export type Params = User
  export type Result = User
}