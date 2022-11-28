import { CreateProjectRepository } from "@/data/protocols";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { Project } from "@/domain/models";
import { ProjectStatus } from "@/domain/enums";

export class ProjectsRepository implements CreateProjectRepository {
    async create(userId: number, data: Project): Promise<Project> {
        return await prismaClient.project.create({
            data: {
                userId,
                name: data.name,
                status: ProjectStatus.TODO
            }
        });
    };

}