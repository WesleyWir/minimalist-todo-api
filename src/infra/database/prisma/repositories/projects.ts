import { CreateProjectRepository, LoadProjectByIdRepository, DeleteProjectRepository } from "@/data/protocols";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { ProjectStatus } from "@/domain/enums";
import { Project } from "@prisma/client";

export class ProjectsRepository implements CreateProjectRepository, LoadProjectByIdRepository, DeleteProjectRepository {
    async deleteById(id: number): Promise<Project> {
        return await prismaClient.project.delete({
            where: {
                id,
            },
        })
    }

    async loadById(id: number): Promise<Project> {
        return await prismaClient.project.findFirstOrThrow({
            where: {
                id
            }
        })
    }

    async create(userId: number, data: Project): Promise<Project> {
        return await prismaClient.project.create({
            data: {
                userId,
                name: data.name,
                status: ProjectStatus.TODO
            }
        });
    }
}