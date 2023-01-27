import { ProjectStatus } from "@/domain/enums"
import { List } from "./list"

export type Project = {
    name: string
    status: ProjectStatus
    userId?: number
    lists?: List[]
}