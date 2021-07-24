<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" required placeholder="username" v-model="username">

      <input type="password" required placeholder="password" v-model="password">

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  data: () => ({
    username: '',
    password: '',
  }),

  methods: {
    ...mapActions('auth', ['register']),

    async onSubmit() {
      await this.register({
        username: this.username,
        password: this.password,
      });

      this.$router.push('/admin');
    },
  },
};
</script>

<style>

</style>
