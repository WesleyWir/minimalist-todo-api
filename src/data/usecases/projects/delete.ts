

import { DeleteProjectRepository, LoadProjectByIdRepository } from '@/data/protocols'
import { DeleteProject } from '@/domain/usecases'
import { UnauthorizedError } from '@/presentation/errors'
import { Project } from '@prisma/client'

export class DeleteProjectUseCase implements DeleteProject {
    constructor(
        private readonly deleteProjectRepository: DeleteProjectRepository,
        private readonly loadProjectByIdRepository: LoadProjectByIdRepository
    ) { }

    async delete(id: number, userId: number): Promise<Project> {
        const project = await this.loadProjectByIdRepository.loadById(id)
        if(project.userId != userId) {
            throw new UnauthorizedError()
        }
        return this.deleteProjectRepository.deleteById(id)
    }
}