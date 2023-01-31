import { UpdateTodoController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeUpdateTodoUseCase } from '@/main/factories';

export const makeUpdateTodoController = (): Controller => {
  const useCase = makeUpdateTodoUseCase();
  return new UpdateTodoController(useCase)
}