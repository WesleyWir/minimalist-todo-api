import { UpdateProjectController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeUpdateProjectUseCase } from '@/main/factories';

export const makeUpdateProjectController = (): Controller => {
  const useCase = makeUpdateProjectUseCase();
  return new UpdateProjectController(useCase)
}