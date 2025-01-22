<template>
    <form @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="form.name"/>
      <label for="email">Email</label>
      <input type="email" name="email"  v-model="form.email"/>
      <label for="message">Message</label>
      <textarea name="message" v-model="form.message"></textarea>
      <button type="submit">Send Message</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  access_key: "YOUR_ACCESS_KEY_HERE",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  message: "",
});

</script>