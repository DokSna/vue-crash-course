<template>
  <div>
    <ul>
      <!-- <li>todo 1</li> -->
      <!-- {{  todos }} -->

      <Todoitem
        v-for="todo of todos"
        v-bind:todo="todo"
        v-bind:key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import Todoitem from '@/components/Todoitem';
export default {
  props: ['todos'],
  components: {
    Todoitem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
