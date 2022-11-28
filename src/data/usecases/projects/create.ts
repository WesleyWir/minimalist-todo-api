

import { Hasher } from '@/data/protocols';
import { CreateProjectRepository } from '@/data/protocols'
import { CreateProject } from '@/domain/usecases'

export class CreateProjectUseCase implements CreateProject {
    constructor(
        private readonly createProjectRepository: CreateProjectRepository
    ) { }

    async create(userId: number, data: CreateProjectRepository.Params): Promise<CreateProjectRepository.Result> {
        return this.createProjectRepository.create(userId, data)
    }
}