import { DeleteTodoController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeDeleteTodoUseCase } from '@/main/factories';

export const makeDeleteTodoController = (): Controller => {
  const useCase = makeDeleteTodoUseCase();
  return new DeleteTodoController(useCase)
}