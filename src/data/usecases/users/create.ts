

import { Hasher } from '@/data/protocols';
import { CreateUserRepository, LoadUserByEmailRepository } from '@/data/protocols'
import { CreateUser } from '@/domain/usecases'

export class CreateUserUseCase implements CreateUser {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
        private readonly hasher: Hasher,
    ) { }

    async create(data: CreateUserRepository.Params): Promise<CreateUserRepository.Result> {
        const hashedPassword = await this.hasher.hash(data.password);
        data = {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            profile: data.profile
        }
        return this.createUserRepository.create(data)
    }
}