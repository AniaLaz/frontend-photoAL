<template>
  <form @submit.prevent="createOrder" class="form">
  <slot></slot>
    <my-input
      v-model.trim="order.namber"
      type="text"
      placeholder="телефон"
      @blur="v$.order.namber.$touch"
      :class="v$.order.namber.$error ? 'error' : ''"
    />
    <div v-if="v$.order.namber.$error" class="text__error">
      Це поле повинно містити 10 символів
    </div>
    <my-input
      v-model.trim="order.email"
      type="email"
      placeholder="e-mail"
      @blur="v$.order.email.$touch"
      :class="v$.order.email.$error ? 'error' : ''"
    />
    <div v-if="v$.order.email.$error" class="text__error">
      e-mail введено не коректно
    </div>
    <textarea
      v-model.trim="order.text"
      class="form__text"
      type="text"
      placeholder="напишіть ваше побажання"
      resize
      @blur="v$.order.text.$touch"
      :class="v$.order.text.$error ? 'error' : ''"
    />
    <div v-if="v$.order.text.$error" class="text__error">
      Це поле повинно містити більше 10 символів
    </div>

    <my-button class="form__submit"> Відіслати </my-button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import axios from "axios";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      order: {
        text: "",
        namber: "",
        email: "",
      },
    };
  },
  validations() {
    return {
      order: {
        text: {
          required,
          minLength: minLength(10),
        },
        namber: {
          required,
          minLength: minLength(10),
        },
        email: {
          email,
        },
      },
    };
  },

  methods: {
    async createOrder() {
      const isTextCorrect = await this.v$.order.text.$error;
      const isNamberCorrect = await this.v$.order.namber.$error;
      const isEmailCorrect = await this.v$.order.email.$error;

      if (isTextCorrect || isNamberCorrect || isEmailCorrect) {
        console.log(this.order, "this.order");
        // this.order = {
        //   text: this.order.text,
        //   namber: this.order.namber,
        //   email: this.order.email,
        // };
        console.log("this.order err", this.order);
        alert(
          "Виникла помилка в звповненні форми. Перевірте будь ласка вірність введених данних"
        );
      } else {
        this.order.id = Date.now();
        // this.$emit("create", this.order);
        this.fetchPostOrder();
        // this.order = {
        //   text: "",
        //   namber: "",
        //   email: "",
        // };
        alert("Дякую, лист відправляється");
      }
    },

    async fetchPostOrder() {
      console.log("fetch");

      try {
        const response = await axios.post(
          "https://backend-photoal-98ep.onrender.com/api/emails",
          {
            text: this.order.text,
            phone: this.order.namber,
            email: this.order.email,
          }
        );
        console.log(response);
        alert("Лист відправлен успішно. Чекайте на відповідь");
        // closeDialog()
      } catch (error) {
        alert(
          error.message,
          "Виникла помилка, спробуйде ще раз або зв'яжіться зі мною по телефону"
        );
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.error {
  box-shadow: 0 0 0 2px rgb(247, 3, 3), 0.3em 0.3em 1em rgba(231, 6, 6, 0.3);
}
.text__error{
  font-size: 10px;
  color: red;
  margin-top: 2px;
}

.form__submit {
  align-self: flex-end;
  margin-top: 15px;
}
.form__text {
  resize: vertical;
  font-size: 15px;
  margin-top: 15px;
  padding: 10px 15px;
}
.is-invalid {
  border: 1px solid read;
}

</style>
