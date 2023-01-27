import { Todo } from '@/domain/models'

export interface CreateTodo {
  create: (data: CreateTodo.Params) => Promise<CreateTodo.Result>
}

export namespace CreateTodo {
  export type Params = Todo
  export type Result = Todo
}