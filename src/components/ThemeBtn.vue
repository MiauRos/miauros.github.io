<template>
  <v-btn
    icon="mdi-theme-light-dark"
    variant="text"
    @click="toggleTheme"
  />
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === 'dark' ? 'light' : 'dark'
}
</script>

<style></style>
