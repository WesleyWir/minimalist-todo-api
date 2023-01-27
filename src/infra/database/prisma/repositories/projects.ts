import { CreateProjectRepository, LoadProjectByIdRepository, DeleteProjectRepository, UpdateProjectRepository } from "@/data/protocols";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { ProjectStatus } from "@/domain/enums";
import { Project } from "@prisma/client";

export class ProjectsRepository implements CreateProjectRepository, UpdateProjectRepository, LoadProjectByIdRepository, DeleteProjectRepository {
    async create(userId: number, data: Project): Promise<Project> {
        return await prismaClient.project.create({
            data: {
                userId,
                name: data.name,
                status: ProjectStatus.TODO
            }
        });
    }

    async update(id: number, data: Project): Promise<Project> {
        return await prismaClient.project.update({
            where: {
                id,
            },
            data: {
                name: data.name,
                status: data.status
            },
        })
    }
    
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
            },
            include: {
                lists: true,
            },
        })
    }
}