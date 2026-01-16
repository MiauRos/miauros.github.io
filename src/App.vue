<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <AppBody/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppBody from "@/components/AppBody.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
