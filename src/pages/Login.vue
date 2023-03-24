<template>
  <div class="fullscreen bg-primary q-pa-sm row">
    <div class="row flex-center col-12">
      <div class="col-md-3 col-sm-6 col-xs-10">
        <q-img
          src="https://defluxo.com/wp-content/uploads/2019/05/Logo-Defluxo-branco-PNG-10-cm.png"
        />
      </div>
    </div>

    <div class="row justify-center col-12">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-xs">
        <q-input
          square
          outlined
          type="text"
          label="Utilizador"
          class="bg-grey-1"
          v-model="form.user"
        />
        <q-input
          square
          outlined
          label="Senha"
          class="bg-grey-1"
          :type="isPwd ? 'password' : 'text'"
          v-model="form.password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="() => (isPwd = !isPwd)"
            />
          </template>
        </q-input>
        <div class="row q-mt-md">
          <q-btn
            outline
            color="grey-1"
            label="Entrar"
            class="col-12"
            @click="handleLogin"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginComponent",

  setup() {
    const $q = useQuasar();
    const form = reactive({ user: "", password: "" });
    const isPwd = ref(true);
    const password = ["password"];
    const router = useRouter();
    const users = ["utilizador", "gestor"];

    const handleLogin = () => {
      if (
        users.some((item) => item === form.user) &&
        password.some((item) => item === form.password)
      ) {
        router.replace({ name: "dashboard" });
        return;
      }

      form.user = "";
      form.password = "";
      $q.notify({
        type: "negative",
        message: "Utilizador ou senha incorreto.",
      });
    };

    return {
      form,
      isPwd,
      handleLogin,
    };
  },
});
</script>
