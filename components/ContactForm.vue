<template>
  <section class="contact-form-container">
    <div v-if="status" class="loading-text">
      <span class="letter">L</span>
      <span class="letter">o</span>
      <span class="letter">a</span>
      <span class="letter">d</span>
      <span class="letter">i</span>
      <span class="letter">n</span>
      <span class="letter">g</span>
      <span class="letter">.</span>
      <span class="letter">.</span>
      <span class="letter">.</span>
    </div>

    <!-- ! //TODO : Travailler loading -->
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      :validateOnValueUpdate="false"
      class="contact-form"
      @submit="submitForm"
      v-if="!status"
    >
      <p
        v-if="sentence"
        :class="{ success: isSuccess, error: !isSuccess }"
        class="contact-form__sentence"
      >
        Votre message a été envoyé avec succès !
        {{ sentence }}
      </p>
      
      <!-- ! //TODO : prévoir select liste -->
      <div class="contact-form__group">
        <label class="contact-form__label" for="name">Nom et prénom :</label>
        <InputText
          type="text"
          name="name"
          class="contact-form__input"
          id="name"
          placeholder="Marty McFly"
        />
        <Message
          v-if="$form.name?.invalid"
          class="contact-form__message"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.name.error.message }}</Message
        >
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" for="email">Email :</label>
        <InputText
          type="email"
          name="email"
          class="contact-form__input"
          id="email"
          placeholder="marty.mcfly@hillvalley.com"
        />
        <Message
          v-if="$form.email?.invalid"
          class="contact-form__message"
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
          cols="20"
          type="text"
          name="message"
          class="contact-form__textarea"
          id="message"
          placeholder="Hello..."
        ></Textarea>
        <Message
          v-if="$form.message?.invalid"
          class="contact-form__message"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.message.error.message }}</Message
        >
      </div>
      <button class="button-blue contact-form__button" type="submit">
        <p class="button-blue__text">Envoyer</p>
        <div class="button-blue__change"></div>
      </button>
    </Form>
  </section>
</template>

<script setup="ts">
// import { useToast } from "primevue/usetoast";
// import { Toast } from "primevue/toast";
import { Form } from "@primevue/forms";
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
    errors.name = [{ message: "Votre nom et prénom est requis !" }];
  }

  if (!values.email) {
    errors.email = [{ message: "Votre email est requis !" }];
  }

  if (!values.message) {
    errors.message = [{ message: "Votre message est requis !" }];
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
