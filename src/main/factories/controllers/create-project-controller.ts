import { CreateProjectController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeCreateProjectUseCase } from '@/main/factories';

export const makeCreateProjectController = (): Controller => {
  const useCase = makeCreateProjectUseCase();
  return new CreateProjectController(useCase)
}