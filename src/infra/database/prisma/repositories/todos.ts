import { CreateTodoRepository, DeleteTodoRepository, LoadTodoByIdRepository, UpdateTodoRepository } from "@/data/protocols";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { ProjectStatus } from "@/domain/enums";
import { Todo } from "@/domain/models";

export class TodosRepository implements CreateTodoRepository, UpdateTodoRepository, DeleteTodoRepository, LoadTodoByIdRepository {
    async loadById(id: number): Promise<Todo> {
        return await prismaClient.todo.findFirstOrThrow({
            where: {
                id
            },
            include: {
                list: {
                    include: {
                        project: true
                    }
                }
            },
        })
    }

    async deleteById(id: number): Promise<Todo> {
        return await prismaClient.todo.delete({
            where: {
                id,
            },
        })
    }

    async update(id: number, data: Todo): Promise<Todo> {
        return await prismaClient.todo.update({
            where: {
                id,
            },
            data: {
                description: data.description,
                status: data.status
            },
        })
    };

    async create(data: Todo): Promise<Todo> {
        return await prismaClient.todo.create({
            data: {
                description: data.description,
                listId: data.list_id,
                status: ProjectStatus.TODO
            }
        });
    }
}