<template>
  <div
      :style="{
      border: '2px solid #333',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: user.age > 30 ? '#f8d7da' : '#d4edda'
    }"
  >
    <img :src="user.photo || 'https://via.placeholder.com/100'" alt="Фото" width="100" />
    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    <p v-if="user.age > 18">Вік: {{ user.age }}</p>
    <p>Посада: {{ user.position }}</p>
    <ul>
      <li v-for="hobby in user.hobbies" :key="hobby">{{ hobby }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '../types/user';

export default defineComponent({
  name: 'UserCard',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
});
</script>
