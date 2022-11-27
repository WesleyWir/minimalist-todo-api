

import { CreateUserRepository } from '@/data/protocols/user/create-user-repository'
import { CreateUser } from '@/domain/usecases'

export class CreateUserUseCase implements CreateUser {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
    ) { }

    async create(data: CreateUserRepository.Params): Promise<CreateUserRepository.Result> {
        return this.createUserRepository.create(data)
    }
}