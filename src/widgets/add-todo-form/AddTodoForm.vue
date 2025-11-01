<script setup lang="ts">
import { useActionTodo } from "@/features/todo-action/model/useActionTodo";

const { newTodo, addTodoAsync } = useActionTodo();
</script>

<template>
  <div>
    <input v-model="newTodo" placeholder="Новая задача" />
    <button @click="addTodoAsync">Добавить</button>
  </div>
</template>
