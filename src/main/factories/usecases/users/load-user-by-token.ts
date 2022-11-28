import { LoadUserByToken } from '@/domain/usecases'
import { LoadUserByTokenUseCase } from '@/data/usecases'
import { UsersRepository } from '@/infra/database/prisma'
import { JwtAdapter } from '@/infra/cryptography'

export const makeLoadUserByTokenUseCase = (): LoadUserByToken => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtAdapter = new JwtAdapter(jwtSecret)
  const usersRepository = new UsersRepository()
  return new LoadUserByTokenUseCase(jwtAdapter, usersRepository)
}