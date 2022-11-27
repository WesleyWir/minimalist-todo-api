import { CreateUserRepository } from "@/data/protocols/user/create-user-repository";
import { prismaClient } from "@/infra/database/prisma/prismaClient";

export class UsersRepository implements CreateUserRepository {
    async create(data: CreateUserRepository.Params): Promise<CreateUserRepository.Result> {
        return prismaClient.user.create({
            data
        });
    };
}