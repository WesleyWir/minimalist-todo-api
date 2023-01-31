import { ProjectStatus } from "@/domain/enums"

export type UpdateTodoRequest = {
    id: string;
    auth_user_id: number
    description: string
    list_id: number
    status: ProjectStatus
}