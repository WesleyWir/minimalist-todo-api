import { UpdateTodo } from '@/domain/usecases'

export interface UpdateTodoRepository {
  update: (id: number, data: UpdateTodoRepository.Params) => Promise<UpdateTodoRepository.Result>
}

export namespace UpdateTodoRepository {
  export type Params = UpdateTodo.Params
  export type Result = UpdateTodo.Result
}