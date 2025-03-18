<template>
  <div v-if="status" class="loading-text">
    <span class="newsletter-letter">L</span>
    <span class="newsletter-letter">o</span>
    <span class="newsletter-letter">a</span>
    <span class="newsletter-letter">d</span>
    <span class="newsletter-letter">i</span>
    <span class="newsletter-letter">n</span>
    <span class="newsletter-letter">g</span>
    <span class="newsletter-letter">.</span>
    <span class="newsletter-letter">.</span>
    <span class="newsletter-letter">.</span>
  </div>
  <Form
    v-slot="$form"
    :initialValues
    :resolver
    :validateOnValueUpdate="false"
    class="newsletter-form"
    @submit="submitForm"
    v-if="!status"
  >
    <div class="newsletter-form__group">
      <label class="newsletter-form__label" for="name-for-newsletter"
        >Prénom :</label
      >
      <InputText
        type="text"
        name="name-for-newsletter"
        class="newsletter-form__input"
        id="name"
        placeholder="Marty McFly"
      />
      <Message
        v-if="$form.name?.invalid"
        class="newsletter-form__message"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.name.error.message }}</Message
      >
    </div>

    <div class="newsletter-form__group">
      <label class="newsletter-form__label" for="email-for-newsletter"
        >Email :</label
      >
      <InputText
        type="email"
        name="email-for-newsletter"
        class="newsletter-form__input"
        id="mail"
        placeholder="marty.mcfly@hillvalley.com"
      />
      <Message
        v-if="$form.email?.invalid"
        class="newsletter-form__message"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.email.error.message }}</Message
      >
    </div>
    <button class="button-blue newsletter-form__button" type="submit">
      <p class="button-blue__text">S'inscrire !</p>
      <div class="button-blue__change"></div>
    </button>
  </Form>

  <p
    v-if="sentence"
    :class="{ success: isSuccess, error: !isSuccess }"
    class="newsletter-form__sentence"
  >
    {{ sentence }}
  </p>
</template>

<script setup="ts">
// import { useToast } from "primevue/usetoast";
// import { Toast } from "primevue/toast";
import { Form } from "@primevue/forms";
import InputText from "primevue/inputtext";
import { ref } from "vue";

// const toast = useToast();
// TODO : mettre en place toasts

const initialValues = ref({
  name: "",
  email: "",
});

const sentence = ref("");
const isSuccess = ref(false);
const status = ref(false);

const resolver = ({ values }) => {
  const errors = {};

  if (!values.name) {
    errors.name = [{ message: "Votre prénom est requis !" }];
  }

  if (!values.email) {
    errors.email = [{ message: "Votre email est requis !" }];
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

    const sendEmailForSubscribeNewsletter = await fetch("api/apiMailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.name,
        email: values.email,
      }),
    });

    if (sendEmailForSubscribeNewsletter.status === 201) {
      sentence.value = "Vous êtes bien inscrit à la newsletter, merciiii ! ";
      isSuccess.value = true;
      status.value = false;

      initialValues.value = {
        name: "",
        email: "",
        message: "",
      };
    }

    if (sendEmailForSubscribeNewsletter.status === 200) {
      sentence.value = "Vous êtes déjà inscrit à la newsletter.";
      isSuccess.value = false;
      status.value = false;

      initialValues.value = {
        name: "",
        email: "",
        message: "",
      };
    }

    if (!sendEmailForSubscribeNewsletter.ok) {
      status.value = false;
      sentence.value =
        "Une erreur est survenue. Veuillez réessayer ou contacter l'administrateur.";
    }
  }
};
</script>

<!-- <style scoped>
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
</style> -->
