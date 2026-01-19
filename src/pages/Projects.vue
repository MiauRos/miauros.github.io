<template>
  <v-container>
    <v-card v-for="item in projects">
      <v-card-title>
        {{ item.name}}
      </v-card-title>
      <v-card-text>
        {{ item.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import {ref} from "vue";

  const projects = ref([
    {
      name: 'Project 1',
      description: 'Project 1',
    },
    {
      name: 'Project 2',
      description: 'Project 2',
    },
    {
      name: 'Project 3',
      description: 'Project 3',
    }
  ])
</script>

<style scoped>
</style>
