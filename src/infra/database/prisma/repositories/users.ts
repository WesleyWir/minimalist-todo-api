import { LoadUserByEmailRepository, UpdateAccessTokenRepository } from "@/data/protocols";
import { CreateUserRepository } from "@/data/protocols/user/create-user-repository";
import { prismaClient } from "@/infra/database/prisma/prismaClient";
import { User } from "@prisma/client";

export class UsersRepository implements CreateUserRepository, LoadUserByEmailRepository, UpdateAccessTokenRepository {
    async updateAccessToken(id: number, token: string): Promise<void> {
        let searchedAuthToken = await prismaClient.authToken.findFirst({
            where: {
                userId: id
            }
        })

        if (!searchedAuthToken) {
            await prismaClient.authToken.create({
                data: {
                    userId: id,
                    accessToken: token,
                    refreshToken: token
                },
                include: {
                    user: true
                }
            });
            return
        }

        await prismaClient.authToken.update({
            where: {
                id: searchedAuthToken.id,
            },
            data: {
                accessToken: token,
                refreshToken: token
            },
        })
    }

    async loadByEmail(email: string): Promise<User> {
        return await prismaClient.user.findUnique({
            where: {
                email,
            },
        })
    }

    async create(data: CreateUserRepository.Params): Promise<CreateUserRepository.Result> {
        return prismaClient.user.create({ data });
    }
}