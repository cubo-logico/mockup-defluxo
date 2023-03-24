<template>
  <q-page padding>
    <div
      :class="$q.platform.is.mobile ? '' : 'q-gutter-x-md'"
      class="row justify-center q-gutter-y-md"
    >
      <q-bar
        class="col-md-8 col-sm-12 col-xs-12"
        style="background-color: #fbfdfd"
      >
        <div class="text-h6">Próximo atendimento</div>
      </q-bar>

      <q-card
        class="shadow-10 col-md-8 col-sm-12 col-xs-11 cursor-pointer q-py-md bg-white"
        v-ripple:grey-3
        @click="() => handleRedirect(1)"
      >
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="water_drop" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6"
                >Desentupimento doméstico</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="person_2" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Nuno Gomes de Oliveira</q-item-label>
              <q-item-label caption
                >Rua: Monte Castelo, 4 RC Esquerdo</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="today" />
            </q-item-section>

            <q-item-section>
              <q-item-label caption>27/03/2023 - 10h</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <q-card
        class="shadow-10 col-md-4 col-sm-6 col-xs-5 cursor-pointer bg-primary q-mr-sm flex flex-center"
        v-ripple:grey-3
        @click="() => handleRedirect(null)"
      >
        <q-card-section class="full-width row justify-center">
          <q-icon name="water_drop" color="white" size="4.5rem" />
        </q-card-section>

        <q-card-actions class="bg-white full-width row justify-center">
          <div class="text-h6">Inervenção</div>
        </q-card-actions>
      </q-card>

      <q-card
        class="shadow-10 col-md-4 col-sm-6 col-xs-5 cursor-pointer bg-secondary q-ml-sm flex flex-center"
        v-ripple:grey-3
        @click="goToCalendar"
      >
        <q-card-section class="full-width row justify-center">
          <q-icon name="calendar_month" color="white" size="4.5rem" />
        </q-card-section>

        <q-card-actions class="bg-white full-width row justify-center">
          <div class="text-h6">Agenda</div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DashboardPage",

  setup() {
    const $q = useQuasar();
    const router = useRouter();

    const handleRedirect = (client) => {
      router.push({ name: "service", params: { customer: client } });
    };
    const goToCalendar = () => router.push({ name: "calendar" });

    return {
      handleRedirect,
      goToCalendar,
    };
  },
});
</script>
