import { ProjectStatus } from "@/domain/enums"

export type UpdateProjectRequest = {
    id: string
    name: string
    status: ProjectStatus
}