<template>
  <div>
    <ul>
      <!-- <li>todo 1</li> -->
      <Todoitem />
    </ul>
  </div>
</template>

<script>
import Todoitem from '@/components/Todoitem';
export default {
  components: {
    Todoitem,
  },
};
</script>
