import { CreateTodoController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeCreateTodoUseCase } from '@/main/factories';

export const makeCreateTodoController = (): Controller => {
  const useCase = makeCreateTodoUseCase();
  return new CreateTodoController(useCase)
}