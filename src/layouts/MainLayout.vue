<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="full-width row justify-between">
          <q-btn flat round color="blue-grey-11" icon="notifications"></q-btn>
          <div class="text-h5 text-white row items-center">Defluxo</div>
          <q-btn-dropdown flat color="white" icon="account_circle">
            <q-list>
              <q-item clickable :to="{ name: 'login' }">
                <q-item-section>
                  <q-item-label>Minha Conta</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #f4f8f9"
    >
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="background-color: #fbfdfd">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Painel",
    caption: "",
    icon: "home",
    routeName: "dashboard",
  },
  {
    title: "Serviços",
    caption: "",
    icon: "water_drop",
    routeName: "service",
  },
  {
    title: "Calendário",
    caption: "",
    icon: "calendar_month",
    routeName: "calendar",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
