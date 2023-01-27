import { LoadUserByEmail } from '@/domain/usecases'
import { LoadUserByEmailUseCase } from '@/data/usecases'
import { UsersRepository } from '@/infra/database/prisma'
import { JwtAdapter } from '@/infra/cryptography'

export const makeLoadUserByEmailUseCase = (): LoadUserByEmail => {
  const usersRepository = new UsersRepository()
  return new LoadUserByEmailUseCase(usersRepository)
}