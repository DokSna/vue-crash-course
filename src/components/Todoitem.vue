<template>
  <li>
    <span>
      <input type="checkbox" name="" id="" />
      <strong>{{ todo.id }}</strong>
      {{ todo.title }}
    </span>
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      reauired: true,
    },
  },
};
</script>
