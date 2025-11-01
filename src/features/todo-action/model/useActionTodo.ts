import { useTodos } from "@/entities/todo/model";
import { todoApi } from "@/entities/todo/api";
import { ref } from "vue";

export const useActionTodo = () => {
  const { todos } = useTodos();

  const newTodo = ref<string>("");

  const addTodoAsync = async () => {
    if (!newTodo.value.trim()) return;
    const created = await todoApi.create({ title: newTodo.value });
    todos.value.push(created);
    newTodo.value = "";
  };

  const removeTodoAsync = async (id: string) => {
    await todoApi.delete(id);
    todos.value = todos.value.filter((t) => t.id !== id);
  };

  return { newTodo, addTodoAsync, removeTodoAsync };
};
