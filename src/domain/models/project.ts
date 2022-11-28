import { ProjectStatus } from "@/domain/enums"

export type Project = {
    name: string
    status: ProjectStatus
}