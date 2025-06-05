// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HotelesView from "../views/HotelesGrid.vue";
import PlantasView from "../views/PlantasGrid.vue";
import HabitacionesView from "../views/HabitacionesGrid.vue";
import AlertasCard from "@/components/ui/AlertasCard.vue";
import GraficaMensual from "@/components/HeaderyComponentesAsi/graficaMensual.vue";
import GraficaSemanal from "@/components/HeaderyComponentesAsi/graficaSemanal.vue";
import GraficaDiaria from "@/components/HeaderyComponentesAsi/graficaDiaria.vue";
import GraficaPersonalizable from "@/components/HeaderyComponentesAsi/graficaPersonalizable.vue";
import graficaVacia from "../components/HeaderyComponentesAsi/graficaVacia.vue";

const routes = [
  { path: "/", redirect: "/custom" },
  { path: "/hoteles", name: "Hoteles", component: HotelesView },
  { path: "/hoteles/:hotelId", name: "Plantas", component: PlantasView },
  {
    path: "/hoteles/:hotelId/plantas/:plantaId",
    name: "Habitaciones",
    component: HabitacionesView,
  },
  { path: "/hoteles/:hotelId/plantas/:plantaId/alertas", name: "Alertas", component: AlertasCard },
  {
    path: "/mensual",
    name: "graficaMensual",
    component: GraficaMensual,
  },
  {
    path: "/semanal",
    name: "graficaSemanal",
    component: GraficaSemanal,
  },
  {
    path: "/diaria",
    name: "graficaDiaria",
    component: GraficaDiaria,
  },
  {
    path: "/custom",
    name: "graficacustom",
    component: GraficaPersonalizable,
  },
  {
    path: "/vacia",
    name: "graficaVacia",
    component: graficaVacia,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
