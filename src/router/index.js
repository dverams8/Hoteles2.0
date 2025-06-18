// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import PlantasView from "../views/PlantasGrid.vue";
import HabitacionesView from "../views/HabitacionesGrid.vue";
import GraficaMensual from "@/components/HeaderyComponentesAsi/graficaMensual.vue";
import GraficaSemanal from "@/components/HeaderyComponentesAsi/graficaSemanal.vue";
import GraficaDiaria from "@/components/HeaderyComponentesAsi/graficaDiaria.vue";
import GraficaPersonalizable from "@/components/HeaderyComponentesAsi/graficaPersonalizable.vue";
import graficaVacia from "../components/HeaderyComponentesAsi/graficaVacia.vue";
import HotelesGrid from "../views/HotelesGrid.vue";
// import AlertaIndividual from "../components/ui/AlertaIndividual.vue";
// import NuevoLimite from "../components/ui/NuevoLimite.vue";
const routes = [
  { path: "/", redirect: "/hoteles" },
  { path: "/hoteles", name: "Hoteles", component: HotelesGrid },
  { path: "/hoteles/:hotelId", name: "Plantas", component: PlantasView },
  {
    path: "/hoteles/:hotelId/plantas/:plantaId",
    name: "Habitaciones",
    component: HabitacionesView,
  },
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
