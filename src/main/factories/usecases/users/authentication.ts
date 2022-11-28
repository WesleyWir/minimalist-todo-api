import env from '@/main/config/env'
import { UsersRepository } from '@/infra/database/prisma/repositories'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'
import { AuthenticationUseCase } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

export const makeAuthenticationUseCase = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtSecret = process.env.JWT_SECRET;
  const jwtAdapter = new JwtAdapter(jwtSecret)
  const usersRepository = new UsersRepository()
  return new AuthenticationUseCase(usersRepository, bcryptAdapter, jwtAdapter, usersRepository)
}