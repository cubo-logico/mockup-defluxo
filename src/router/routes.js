const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("pages/Login.vue"),
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("pages/Dashboard.vue"),
      },
      {
        path: "service/:customer?",
        name: "service",
        component: () => import("pages/ServicePage.vue"),
      },
      {
        path: "calendar",
        name: "calendar",
        component: () => import("pages/Calendar.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
