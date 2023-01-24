import { CreateListRepository } from "@/data/protocols/lists/create-list-repository";
import { List } from "@/domain/models";
import { prismaClient } from "../prismaClient";

export class ListsRepository implements CreateListRepository{
    async create(data: List): Promise<List>{
        await prismaClient.list.create({
            data: {
                name: data.name,
                projectId: data.project_id
            }
        });
        return data;
    };

}