import { LoadListController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { makeLoadListUseCase } from '@/main/factories';

export const makeLoadListController = (): Controller => {
  const useCase = makeLoadListUseCase();
  return new LoadListController(useCase)
}