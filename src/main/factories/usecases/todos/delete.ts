import { DeleteTodo } from '@/domain/usecases'
import { DeleteTodoUseCase } from '@/data/usecases'
import { TodosRepository } from '@/infra/database/prisma/repositories'

export const makeDeleteTodoUseCase = (): DeleteTodo => {
  const todossRepository = new TodosRepository()
  return new DeleteTodoUseCase(todossRepository, todossRepository)
}