<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
export default {
  name: 'App',
  data() {
    return {
      todos: [
        // { id: 1, title: 'Купить хлеб', completed: false },
        // { id: 2, title: 'Купить масло', completed: false },
        // { id: 3, title: 'Купить пиво', completed: false },
      ],
      loading: true,
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => {
        //   добавляем искусственную задержку
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    // TodoList: TodoList когда ключ и значение совпадают, можно 1 раз указать имя компонента
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>
