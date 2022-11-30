import { UpdateProject } from '@/domain/usecases'

export interface UpdateProjectRepository {
  update: (id: number, data: UpdateProjectRepository.Params) => Promise<UpdateProjectRepository.Result>
}

export namespace UpdateProjectRepository {
  export type Params = UpdateProject.Params
  export type Result = UpdateProject.Result
}