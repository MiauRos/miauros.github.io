<template>
  <v-app-bar
    app
    color="surface"
    elevation="0"
    height="55"
  >
    <v-app-bar-nav-icon icon="mdi-robot-excited-outline"/>
    <v-app-bar-title class="text-text font-weight-bold">
      Mauricio Rosales
    </v-app-bar-title>

    <v-spacer />

    <v-btn variant="text">{{ t('header.home') }}</v-btn>
    <v-btn variant="text">{{ t('header.projects') }}</v-btn>
    <v-btn variant="text">{{ t('header.about') }}</v-btn>
    <v-btn variant="text">{{ t('header.contact') }}</v-btn>

    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="lang in languages"
          :key="lang.value"
          @click="changeLanguage(lang.value)"
        >
          <v-list-item-title>
            {{ lang.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <theme-btn/>
  </v-app-bar>
</template>

<script setup>
import ThemeBtn from "@/components/ThemeBtn.vue";
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const languages = [
  { title: 'EN 🍔', value: 'en' },
  { title: 'ES 🌮', value: 'es' },
  { title: 'DE 🥨', value: 'de' }
]

const changeLanguage = (lang) => {
  locale.value = lang
}
</script>

<style>
</style>
