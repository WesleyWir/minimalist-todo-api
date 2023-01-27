import { ProjectStatus } from "@/domain/enums"
import { List } from "./list"

export type Todo = {
    description: string
    status: ProjectStatus
    listId?: number
    list_id?: number
    list?: List
}