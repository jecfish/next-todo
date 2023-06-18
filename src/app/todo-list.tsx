"use client";

import Todo from "./todo";

const getTodos = async () => {
  let todos = await new Promise((resolve) => resolve([
    {
      id: 1,
      name: 'Draw a fish.',
      isDone: true,
    },
    {
      id: 2,
      name: 'Order a pair of goggles',
      isDone: false,
    },
    {
      id: 3,
      name: 'Send BCD to service.',
      isDone: false,
    },
    {
      id: 4,
      name: 'Buy a new sunscreen.',
      isDone: true,
    },
  ])); // fetch("http://localhost:3001/api/todo/list");
  return { todos };
};

export default async function TodoList() {
  const { todos }: any = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: any) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}