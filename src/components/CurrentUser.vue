<template>
  <div v-if="user">
    <p>Welcome, {{ user.firstname }} {{ user.lastname }}</p>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <p>You are not logged in.</p>
  </div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      user: AuthService.getCurrentUser(),
    };
  },
  methods: {
    logout() {
      AuthService.logout();
      this.user = null;
    },
  },
};
</script>
