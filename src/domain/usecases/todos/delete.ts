import { Todo } from '@/domain/models'

export interface DeleteTodo {
  delete: (id: number, userId: number) => Promise<DeleteTodo.Result>
}

export namespace DeleteTodo {
  export type Result = Todo
}