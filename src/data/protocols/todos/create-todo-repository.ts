import { CreateTodo } from '@/domain/usecases'

export interface CreateTodoRepository {
  create: (data: CreateTodoRepository.Params) => Promise<CreateTodoRepository.Result>
}

export namespace CreateTodoRepository {
  export type Params = CreateTodo.Params
  export type Result = CreateTodo.Result
}