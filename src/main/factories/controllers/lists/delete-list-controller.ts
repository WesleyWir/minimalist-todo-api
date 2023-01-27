import { DeleteListController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeDeleteListUseCase } from '@/main/factories';

export const makeDeleteListController = (): Controller => {
  const useCase = makeDeleteListUseCase();
  return new DeleteListController(useCase)
}