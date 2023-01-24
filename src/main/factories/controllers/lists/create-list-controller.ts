import { CreateListController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeCreateListUseCase } from '@/main/factories';

export const makeCreateListController = (): Controller => {
  const useCase = makeCreateListUseCase();
  return new CreateListController(useCase)
}