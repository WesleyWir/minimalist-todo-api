import { ProjectStatus } from "@/domain/enums"

export type CreateProjectRequest = {
    auth_user_id: number
    name: string
    status: ProjectStatus
}