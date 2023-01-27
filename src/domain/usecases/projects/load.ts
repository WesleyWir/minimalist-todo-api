import { Project } from '@/domain/models'

export interface LoadProject {
  load: (id: number, userId: number) => Promise<LoadProject.Result>
}

export namespace LoadProject {
  export type Params = Project
  export type Result = Project
}