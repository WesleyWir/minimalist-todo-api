import { ProjectStatus } from "@/domain/enums"

export type CreateProjectRequest = {
    id: number
    name: string
    status: ProjectStatus
}