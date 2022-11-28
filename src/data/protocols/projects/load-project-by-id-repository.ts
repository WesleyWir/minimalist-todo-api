import { Project } from "@prisma/client"

export interface LoadProjectByIdRepository {
    loadById: (id: number) => Promise<LoadProjectByIdRepository.Result>
}

export namespace LoadProjectByIdRepository {
    export type Result = Project
}