import Dump from "./dump";
import TodoList from "./todo-list";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Dump />
      <TodoList />
    </main>
  )
}
