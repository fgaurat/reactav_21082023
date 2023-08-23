import Image from "next/image";
import TodoRow from "./components/TodoRow";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:5000/todos");
  const data = await response.json();
  console.log(data)
  return (
    <main className="flex flex-col items-center justify-between p-7">
      <h1>TodoList</h1>
      <Link href="/new">New</Link>
      <table>
        <tbody>
        {data.map((todo: any) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
        </tbody>
      </table>
    </main>
  );
}
