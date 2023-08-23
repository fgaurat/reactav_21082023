import { DAO } from "./DAO";
import { Todo } from "./Todo";

export class TodoDAO implements DAO<Todo> {
  findAll(): Promise<Todo[]> {
    return fetch(import.meta.env.VITE_TODOS_URL).then((resp) => resp.json());
  }

  delete(todo: Todo): Promise<void> {
    const url = `${import.meta.env.VITE_TODOS_URL}/${todo.id}`;
    return fetch(url, { method: "DELETE" }).then((resp) => resp.json());
  }

  save(todo: Todo): Promise<Todo> {
    const url = import.meta.env.VITE_TODOS_URL;
    return fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then((resp) => resp.json());
  }
}
