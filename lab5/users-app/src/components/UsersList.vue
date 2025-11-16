<template>
  <div>
    <!-- Toolbar фільтр -->
    <div>
      <button @click="filterGender('all')">Всі</button>
      <button @click="filterGender('male')">Чоловіки</button>
      <button @click="filterGender('female')">Жінки</button>
    </div>

    <!-- Повідомлення, якщо список пустий -->
    <div v-if="filteredUsers.length === 0">Список юзерів пустий</div>

    <!-- Список карток користувачів -->
    <UserCard
        v-for="user in filteredUsers"
        :key="user.firstName + user.lastName"
        :user="user"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import UserCard from './UserCard.vue';
import { User } from '../types/user';

export default defineComponent({
  name: 'UsersList',
  components: { UserCard },
  setup() {
    const users = ref<User[]>([
      { firstName: 'Іван', lastName: 'Коваль', gender: 'male', age: 25, position: 'Розробник', photo: '', hobbies: ['Читання', 'Ігри'] },
      { firstName: 'Марія', lastName: 'Шевченко', gender: 'female', age: 30, position: 'Дизайнер', photo: '', hobbies: ['Малювання', 'Подорожі'] },
      { firstName: 'Олег', lastName: 'Петренко', gender: 'male', age: 22, position: 'Тестувальник', photo: '', hobbies: ['Велоспорт', 'Кіно'] },
      { firstName: 'Анна', lastName: 'Іваненко', gender: 'female', age: 27, position: 'Менеджер', photo: '', hobbies: ['Кулінарія', 'Йога'] },
      { firstName: 'Дмитро', lastName: 'Кравченко', gender: 'male', age: 35, position: 'Team Lead', photo: '', hobbies: ['Футбол', 'Музика'] },
      { firstName: 'Оксана', lastName: 'Мельник', gender: 'female', age: 24, position: 'Маркетолог', photo: '', hobbies: ['Фотографія', 'Читання'] },
      { firstName: 'Сергій', lastName: 'Гончар', gender: 'male', age: 28, position: 'DevOps', photo: '', hobbies: ['Програмування', 'Гри'] },
      { firstName: 'Ірина', lastName: 'Бойко', gender: 'female', age: 32, position: 'Аналітик', photo: '', hobbies: ['Подорожі', 'Малювання'] },
      { firstName: 'Володимир', lastName: 'Ткаченко', gender: 'male', age: 40, position: 'Архітектор', photo: '', hobbies: ['Фотографія', 'Велоспорт'] },
      { firstName: 'Наталя', lastName: 'Коваленко', gender: 'female', age: 29, position: 'HR', photo: '', hobbies: ['Йога', 'Кулінарія'] },
    ]);

    const selectedGender = ref<'all' | 'male' | 'female'>('all');

    const filterGender = (gender: 'all' | 'male' | 'female') => {
      selectedGender.value = gender;
    };

    const filteredUsers = computed(() => {
      if (selectedGender.value === 'all') return users.value;
      return users.value.filter(u => u.gender === selectedGender.value);
    });

    return { filteredUsers, filterGender };
  }
});
</script>
