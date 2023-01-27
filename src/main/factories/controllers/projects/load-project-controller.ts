import { LoadProjectController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeLoadProjectUseCase } from '@/main/factories';

export const makeLoadProjectController = (): Controller => {
  const useCase = makeLoadProjectUseCase();
  return new LoadProjectController(useCase)
}