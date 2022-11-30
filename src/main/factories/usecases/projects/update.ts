import { UpdateProject } from '@/domain/usecases'
import { UpdateProjectUseCase } from '@/data/usecases'
import { ProjectsRepository } from '@/infra/database/prisma/repositories'

export const makeUpdateProjectUseCase = (): UpdateProject => {
  const projectsRepository = new ProjectsRepository()
  return new UpdateProjectUseCase(projectsRepository, projectsRepository)
}