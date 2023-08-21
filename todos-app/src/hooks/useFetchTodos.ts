import { useEffect, useState } from "react";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

export default function useFetchTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const dao = new TodoDAO();

    dao
      .findAll()
      .then(setTodos)
      .catch(setError)
      .finally(() => setLoading(false));


  }, []);

  return { todos, setTodos, loading, error };
}
