<script setup lang="ts">
import { onMounted } from "vue";
import { useTodos } from "@/entities/todo/model/useTodos";
import { useActionTodo } from "@/features/todo-action/model/useActionTodo";

const { todos, loadTodos } = useTodos();
const { removeTodoAsync } = useActionTodo();

onMounted(loadTodos);
</script>

<template>
  <ul>
    <li v-for="t in todos" :key="t.id">
      {{ t.title }}
      <button @click="removeTodoAsync(t.id)">✕</button>
    </li>
  </ul>
</template>
