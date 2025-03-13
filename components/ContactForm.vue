<template>
  <section class="baseline-contact spacing-header">
    <h1 class="baseline-contact__title container-title">Contactez-nous</h1>
  </section>
  <section class="contact-form-container width">
    <div class="contact-form-loader" v-if="status">Loading...</div>
    <form class="contact-form" v-else>
      <div class="contact-form__group">
        <label class="contact-form__label" for="name">Nom et prénom :</label>
        <input
          class="contact-form__input"
          type="text"
          id="name"
          v-model="formName"
          required
        />
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="email">Email :</label>
        <input
          class="contact-form__input"
          type="email"
          id="email"
          v-model="formEmail"
          required
        />
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="message">Message :</label>
        <textarea
          class="contact-form__input"
          id="message"
          v-model="formMessage"
          required
        ></textarea>
      </div>
      <button class="contact-form__button" @click="sendEmail" type="button">
        Envoyer
      </button>
    </form>

    <p
      v-if="sentence"
      :class="{ success: isSuccess, error: !isSuccess }"
      class="contact-form__button"
    >
      {{ sentence }}
    </p>
  </section>
</template>

<script setup="ts">
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
