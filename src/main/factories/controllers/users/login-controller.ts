import { makeAuthenticationUseCase } from '@/main/factories'
import { Controller } from '@/presentation/contracts'
import { LoginController } from '@/presentation/controllers'

export const makeLoginController = (): Controller => {
  return new LoginController(makeAuthenticationUseCase())
}