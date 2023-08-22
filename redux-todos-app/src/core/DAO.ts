export interface DAO<T>{

    findAll():Promise<T[]>
    delete(todo: T): Promise<void>
    save(todo: T): Promise<T>

}