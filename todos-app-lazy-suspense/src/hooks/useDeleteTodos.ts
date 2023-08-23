import { useState } from "react";
import { TodoDAO } from "../core/TodoDAO";
import { Todo } from "../core/Todo";

export default function useDeleteTodos(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const dao = new TodoDAO()

    const deleteTodo = (todo:Todo) =>{
        setLoading(true)
        dao.delete(todo)
        .catch(setError)
        .finally(() => setLoading(false));
    }
    
    return { deleteTodo,loading,error}
}