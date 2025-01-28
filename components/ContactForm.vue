<template>
  <div>
    <h1>Contactez-nous</h1>

    <div v-if="status">Loading...</div>
    <form v-else>
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

      <button @click="sendEmail" type="button">Envoyer</button>
    </form>

    <p v-if="sentence" :class="{ success: isSuccess, error: !isSuccess }">
      {{ sentence }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formName = ref("");
const formEmail = ref("");
const formMessage = ref("");
const sentence = ref("");
const isSuccess = ref(false);
const status = ref(false);

const sendEmail = async () => {
  if (!formName.value || !formEmail.value || !formMessage.value) {
    sentence.value = "Veuillez remplir tous les champs.";
  }

  if (formName.value && formEmail.value && formMessage.value) {
    status.value = true;
    sentence.value = "";
    const form = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
      }),
    });

    if (form.ok) {
      sentence.value = "Votre message a été envoyé avec succès !";
      isSuccess.value = true;
      status.value = false;
      formName.value = "";
      formEmail.value = "";
      formMessage.value = "";
    }

    if (!form.ok) {
      status.value = false;
      sentence.value =
        "Une erreur est survenue. Veuillez réessayer ou contacter l'administrateur.";
    }
  }
};
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
