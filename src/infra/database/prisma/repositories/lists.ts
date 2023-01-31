import { CreateListRepository, DeleteListRepository, LoadListByIdRepository } from "@/data/protocols";
import { List } from "@/domain/models";
import { prismaClient } from "../prismaClient";

export class ListsRepository implements CreateListRepository, LoadListByIdRepository, DeleteListRepository {
    async create(data: List): Promise<List> {
        await prismaClient.list.create({
            data: {
                name: data.name,
                projectId: data.project_id
            }
        });
        return data;
    };

    async deleteById(id: number): Promise<List> {
        return await prismaClient.list.delete({
            where: {
                id,
            },
        })
    }

    async loadById(id: number): Promise<List> {
        return await prismaClient.list.findFirstOrThrow({
            where: {
                id
            },
            include: {
                project: true,
                todos: true
            },
        })
    }
}