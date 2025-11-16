<template>
  <div id="app">
    <h1>Список користувачів</h1>
    <UsersList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from './components/UsersList.vue';

export default defineComponent({
  name: 'App',
  components: { UsersList }
});
</script>
