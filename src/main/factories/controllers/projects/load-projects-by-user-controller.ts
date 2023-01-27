import { LoadProjectsByUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeLoadProjectsByUserUseCase } from '@/main/factories';

export const makeLoadProjectsByUserController = (): Controller => {
  const useCase = makeLoadProjectsByUserUseCase();
  return new LoadProjectsByUserController(useCase)
}