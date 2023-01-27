import { CreateTodo } from '@/domain/usecases'
import { CreateTodoUseCase } from '@/data/usecases'
import { TodosRepository } from '@/infra/database/prisma/repositories'

export const makeCreateTodoUseCase = (): CreateTodo => {
  const todosRepository = new TodosRepository()
  return new CreateTodoUseCase(todosRepository)
}