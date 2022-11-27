import { CreateUser } from '@/domain/usecases'
import { CreateUserUseCase } from '@/data/usecases'
import { UsersRepository } from '@/infra/database/prisma'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'

export const makeCreateUserUseCase = (): CreateUser => {
  const usersRepository = new UsersRepository()
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt)
  return new CreateUserUseCase(usersRepository, bcryptAdapter)
}