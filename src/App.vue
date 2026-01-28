<template>
  <v-app>
    <AppHeader v-if="route.name !== 'Valentine'"/>
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter v-if="route.name !== 'Valentine'"/>
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>
