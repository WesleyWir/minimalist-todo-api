import { UpdateTodo } from '@/domain/usecases'
import { UpdateTodoUseCase } from '@/data/usecases'
import { TodosRepository } from '@/infra/database/prisma/repositories'

export const makeUpdateTodoUseCase = (): UpdateTodo => {
  const todosRepository = new TodosRepository()
  return new UpdateTodoUseCase(todosRepository)
}