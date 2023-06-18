"use client";

import { useRouter } from "next/navigation";

async function update(id: number, isDone: boolean, refresh: () => void) {
  // await fetch(`/api/todo/update`, {
  //   method: "POST",
  //   body: JSON.stringify({ id, isDone }),
  // });

  refresh();
}

async function deleteTodo(id: number, refresh: () => void) {
  // await fetch(`/api/todo/delete?id=${id}`, {
  //   method: "DELETE",
  // });

  refresh();
}

export default function Todo({ todo }: any) {
  const router = useRouter();

  return (
    <>
      <input
        className="mr-2"
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 px-2 rounded" onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
