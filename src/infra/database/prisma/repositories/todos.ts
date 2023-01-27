import { CreateTodoRepository } from "@/data/protocols";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { ProjectStatus } from "@/domain/enums";
import { Todo } from "@/domain/models";

export class TodosRepository implements CreateTodoRepository {
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