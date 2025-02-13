<template>
  <div>
    <h1>Inscris toi à la newsletter !</h1>

    <div v-if="status">Loading...</div>
    <form v-else>
      <div>
        <label for="firstName">Prénom :</label>
        <input type="text" id="firstName" v-model="firstName" required />
      </div>

      <div>
        <label for="lastName">Nom :</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>

      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <button @click="sendEmailForNewsletter" type="button">Envoyer</button>
    </form>

    <p v-if="sentence" :class="{ success: isSuccess, error: !isSuccess }">
      {{ sentence }}
    </p>
  </div>
</template>

<script setup="ts">
import { ref } from "vue";
import { postSubscriber } from "../utils/apiMailer.services";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const sentence = ref("");
const isSuccess = ref(false);
const status = ref(false);

const sendEmailForNewsletter = async () => {
  if (!firstName.value || !lastName.value || !email.value) {
    sentence.value = "Veuillez remplir tous les champs.";
  }

  if (firstName.value && lastName.value && email.value) {
    status.value = true;
    sentence.value = "";

    const newsletterSubscribe = await postSubscriber({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    });

    if (newsletterSubscribe.ok) {
      sentence.value = "Vous êtes bien inscrit à la newsletter, merciiii ! ";
      isSuccess.value = true;
      status.value = false;
      firstName.value = "";
      lastName.value = "";
      email.value = "";
    }

    if (!newsletterSubscribe.ok) {
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
