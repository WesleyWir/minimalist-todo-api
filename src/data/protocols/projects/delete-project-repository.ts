import { Project } from "@prisma/client";

export interface DeleteProjectRepository {
    deleteById: (id: number) => Promise<Project>
}