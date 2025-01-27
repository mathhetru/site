<template>
  <div>
    <h1>Contactez-nous</h1>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="formName" required />
      </div>

      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="formEmail" required />
      </div>

      <div>
        <label for="message">Message :</label>
        <textarea id="message" v-model="formMessage" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>

    <p v-if="status" :class="{ success: isSuccess, error: !isSuccess }">
      {{ status }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')
const status = ref('')
const isSuccess = ref(false)

const sendEmail = async () => {
  status.value = ''
  isSuccess.value = false

  try {
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
      }),
    })

    if (response.ok) {
      status.value = 'Votre message a été envoyé avec succès !'
      isSuccess.value = true
      formName.value = ''
      formEmail.value = ''
      formMessage.value = ''
    } else {
      status.value = 'Une erreur est survenue. Veuillez réessayer.'
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi :', error)
    status.value = 'Impossible d\'envoyer le message. Vérifiez votre connexion.'
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

label {
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p.success {
  margin-top: 15px;
  color: green;
}

p.error {
  margin-top: 15px;
  color: red;
}
</style>
