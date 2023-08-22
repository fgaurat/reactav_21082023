import { useState } from "react";
import { TodoDAO } from "../core/TodoDAO";
import { Todo } from "../core/Todo";

export default function useSaveTodo(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const dao = new TodoDAO()

    const saveTodo = async (todo:Todo) =>{
        setLoading(true)
        try{
            const savedTodo = await dao.save(todo)
            return savedTodo

        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
        
    }
    
    return { saveTodo,loading,error}
}