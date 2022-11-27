import { CreateUser } from '@/domain/usecases'
import { CreateUserUseCase } from '@/data/usecases'
import { UsersRepository } from '@/infra/database/prisma'

export const makeCreateUserUseCase = (): CreateUser => {
  const usersRepository = new UsersRepository()
  return new CreateUserUseCase(usersRepository)
}