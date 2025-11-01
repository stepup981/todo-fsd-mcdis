
import type { ITodo } from "@/entities/todo/model";


// Моковые данные
let todos: ITodo[] = [
  { id: "1", title: "Сделать FSD пример" },
  { id: "2", title: "Вывести todos в список" },
];

export const todoApi = {
  getAll: async (): Promise<ITodo[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([...todos]), 200));
  },
  create: async (data: { title: string }): Promise<ITodo> => {
    const newTodo = { id: String(Date.now()), ...data };
    todos.push(newTodo);
    return new Promise((resolve) => setTimeout(() => resolve(newTodo), 200));
  },
  delete: async (id: string): Promise<void> => {
    todos = todos.filter((t) => t.id !== id);
    return new Promise((resolve) => setTimeout(resolve, 200));
  },
};
