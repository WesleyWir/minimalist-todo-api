import { DeleteProjectController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeDeleteProjectUseCase } from '@/main/factories';

export const makeDeleteProjectController = (): Controller => {
  const useCase = makeDeleteProjectUseCase();
  return new DeleteProjectController(useCase)
}