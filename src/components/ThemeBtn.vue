<template>
  <v-btn
    :icon="icon"
    variant="text"
    @click="toggleTheme"
  />
</template>

<script setup>
import { useTheme } from 'vuetify'
import {ref} from "vue";

const theme = useTheme()
const icon = ref(theme.global.name === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night')

const toggleTheme = () => {
  if (theme.global.name.value === 'dark') {
    theme.global.name.value = 'light';
    icon.value = 'mdi-weather-night';
  } else {
    theme.global.name.value = 'dark';
    icon.value = 'mdi-white-balance-sunny';
  }
}
</script>

<style></style>
