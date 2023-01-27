import { LoadProject } from '@/domain/usecases'
import { LoadProjectUseCase } from '@/data/usecases'
import { ProjectsRepository } from '@/infra/database/prisma/repositories'

export const makeLoadProjectUseCase = (): LoadProject => {
  const projectsRepository = new ProjectsRepository()
  return new LoadProjectUseCase(projectsRepository)
}