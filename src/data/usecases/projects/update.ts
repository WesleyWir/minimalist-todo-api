import { LoadProjectByIdRepository, UpdateProjectRepository } from "@/data/protocols";
import { Project } from "@/domain/models";
import { UpdateProject } from "@/domain/usecases";

export class UpdateProjectUseCase implements UpdateProject {

    constructor(
        private readonly updateProjectRepository: UpdateProjectRepository,
        private readonly loadProjectByIdRepository: LoadProjectByIdRepository
    ) { }

    async update(id: number, data: UpdateProjectRepository.Params): Promise<Project> {
        return this.updateProjectRepository.update(id, data)
    }
}