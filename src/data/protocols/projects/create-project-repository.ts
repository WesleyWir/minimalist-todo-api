import { CreateProject } from '@/domain/usecases'

export interface CreateProjectRepository {
  create: (userId: number, data: CreateProjectRepository.Params) => Promise<CreateProjectRepository.Result>
}

export namespace CreateProjectRepository {
  export type Params = CreateProject.Params
  export type Result = CreateProject.Result
}