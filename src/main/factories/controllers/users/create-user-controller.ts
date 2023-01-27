import { CreateUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeCreateUserUseCase, makeLoadUserByEmailUseCase } from '@/main/factories';

export const makeCreateUserController = (): Controller => {
  const loadUserByEmailUseCase = makeLoadUserByEmailUseCase();
  const createUserUseCase = makeCreateUserUseCase();
  return new CreateUserController(createUserUseCase, loadUserByEmailUseCase)
}