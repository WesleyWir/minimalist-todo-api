import { CreateUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeCreateUserUseCase } from '@/main/factories';

export const makeCreateUserController = (): Controller => {
  const useCase = makeCreateUserUseCase();
  return new CreateUserController(useCase)
}