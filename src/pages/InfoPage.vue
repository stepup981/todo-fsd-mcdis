<script setup lang="ts">
import { AddTodoForm } from "@/widgets/add-todo-form";
import { TodoList } from "@/widgets/todo-list";
</script>

<template>
  <h1>Страница</h1>
  <div>помните, что на это странице могут быть и другие виджеты</div>
  <h2>Todo FSD пример</h2>
  <AddTodoForm />
  <TodoList />
</template>
