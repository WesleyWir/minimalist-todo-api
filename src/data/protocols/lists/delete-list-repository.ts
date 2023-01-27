import { List } from "@/domain/models";

export interface DeleteListRepository {
    deleteById: (id: number) => Promise<List>
}