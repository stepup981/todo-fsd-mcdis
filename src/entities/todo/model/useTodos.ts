import { ref } from "vue";
import { todoApi } from "@/entities/todo/api";
import type { ITodo } from "@/entities/todo/model";

const todos = ref<ITodo[]>([]);
const isLoading = ref(false);

export const useTodos = () => {
  const loadTodos = async () => {
    isLoading.value = true;
    try {
      todos.value = await todoApi.getAll();
    } finally {
      isLoading.value = false;
    }
  };

  return { todos, isLoading, loadTodos };
};
