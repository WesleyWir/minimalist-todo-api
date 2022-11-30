import { Project } from '@/domain/models'

export interface UpdateProject {
  update: (id: number, data: UpdateProject.Params) => Promise<UpdateProject.Result>
}

export namespace UpdateProject {
  export type Params = Project
  export type Result = Project
}