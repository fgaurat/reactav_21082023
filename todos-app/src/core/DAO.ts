import { Todo } from "./Todo"

export interface DAO<T>{

    findAll():Promise<T[]>
    delete(todo: Todo): Promise<void>

}