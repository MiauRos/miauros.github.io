<template>
  <v-app-bar
    app
    color="surface"
    elevation="0"
    height="55"
  >
    <!-- Logo / Nombre -->
    <v-app-bar-title class="text-text font-weight-bold">
      MiauRos
    </v-app-bar-title>

    <v-spacer />

    <!-- Navegación -->
    <v-btn variant="text">Home</v-btn>
    <v-btn variant="text">Projects</v-btn>
    <v-btn variant="text">About</v-btn>
    <v-btn variant="text">Contact</v-btn>

    <!-- Toggle tema -->
    <theme-btn/>
  </v-app-bar>
</template>

<script setup>
import ThemeBtn from "@/components/ThemeBtn.vue";
</script>

<style>
</style>
