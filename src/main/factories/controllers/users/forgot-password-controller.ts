import { Controller } from '@/presentation/contracts'
import { makeForgotPasswordUseCase, makeLoadUserByEmailUseCase } from '@/main/factories';
import { ForgotPasswordController } from '@/presentation/controllers';

export const makeForgotPasswordController = (): Controller => {
  const loadUserByEmailUseCase = makeLoadUserByEmailUseCase();
  const forgotPasswordUseCase = makeForgotPasswordUseCase();
  return new ForgotPasswordController(loadUserByEmailUseCase, forgotPasswordUseCase)
}