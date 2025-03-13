<template>
  <section class="section-contact">
    <h1 class="section-contact__title">Contactez-moi</h1>
    <div class="section-contact__line"></div>
    <p class="section-contact__text">
      Du crayon au code, je donne vie à vos projets. <br />
      Un projet ? Une idée ? Ou juste un coucou.
    </p>
  </section>
  <img
    class="section-contact__wave"
    src="~/assets/waves/wave-blue-down.svg"
    alt="wave"
  />
  <section class="contact-form-container">
    <div class="contact-form-loader" v-if="status">Loading...</div>
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      :validateOnValueUpdate="false"
      class="contact-form"
      @submit="submitForm"
      v-else
    >
      <div class="contact-form__group">
        <label class="contact-form__label" for="name">Nom et prénom :</label>
        <InputText
          type="text"
          name="name"
          class="contact-form__input"
          id="name"
        />
        <Message
          v-if="$form.name?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.name.error.message }}</Message
        >
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="email">Email :</label>
        <InputText
          type="text"
          name="email"
          class="contact-form__input"
          id="email"
        />
        <Message
          v-if="$form.email?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.email.error.message }}</Message
        >
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="message">Message :</label>
        <Textarea
          rows="5"
          cols="30"
          type="text"
          name="message"
          class="contact-form__input"
          id="message"
        ></Textarea>
        <Message
          v-if="$form.message?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.message.error.message }}</Message
        >
      </div>
      <button class="contact-form__button" type="submit">Envoyer</button>
    </Form>

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
// import { useToast } from "primevue/usetoast";
// import { Toast } from "primevue/toast";
import { Form } from "@primevue/forms";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { ref } from "vue";

// const toast = useToast();

const initialValues = ref({
  name: "",
  email: "",
  message: "",
});

const sentence = ref("");
const isSuccess = ref(false);
const status = ref(false);

const resolver = ({ values }) => {
  const errors = {};

  if (!values.name) {
    errors.name = [{ message: "Votre nom et prénom est requis" }];
  }

  if (!values.email) {
    errors.email = [{ message: "Votre email est requis" }];
  }

  if (!values.message) {
    errors.message = [{ message: "Votre message est requis" }];
  }

  return {
    values,
    errors,
  };
};

const submitForm = async ({ values, valid }) => {
  if (valid) {
    status.value = true;
    sentence.value = "";

    const sendEmail = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    if (sendEmail.ok) {
      // toast.add({
      //   severity: "success",
      //   summary: "Form is submitted.",
      //   life: 3000,
      // });
      sentence.value = "Votre message a été envoyé avec succès !";
      isSuccess.value = true;
      status.value = false;

      initialValues.value = {
        name: "",
        email: "",
        message: "",
      };
    }

    if (!sendEmail.ok) {
      status.value = false;
      sentence.value =
        "Une erreur est survenue. Veuillez réessayer ou contacter l'administrateur.";
    }
  }
};
</script>
