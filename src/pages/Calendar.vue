<template>
  <q-page padding>
    <div class="fit">
      <div class="text-h5 q-mt-md">Calendário</div>
      <q-separator />
      <div class="flex flex-center q-mt-lg">
        <q-date
          v-model="date"
          :events="events"
          :event-color="
            (date) => (date[9] % 2 === 0 ? 'deep-purple-11' : 'deep-orange')
          "
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CalendarPage",

  setup() {
    return {
      date: ref("2023/03/27"),
      events: [
        "2023/03/01",
        "2023/03/05",
        "2023/03/06",
        "2023/03/09",
        "2023/03/24",
      ],
      eventsFn(date) {
        if (
          date === "2023/03/01" ||
          date === "2023/03/05" ||
          date === "2023/03/06" ||
          date === "2023/03/09" ||
          date === "2023/03/23"
        ) {
          return true;
        }
        return false;
      },
    };
  },
});
</script>
