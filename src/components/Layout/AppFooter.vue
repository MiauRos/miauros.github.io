<template>
  <v-footer
    app
    height="40"
    color="background"
  >
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.link"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon
        :icon="item.icon"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Mauricio Rosales</span>
      — San Luis Potosí
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'LinkedIn Profile',
      icon: 'mdi-linkedin',
      link: 'https://www.linkedin.com/in/mauricio-rosales-rodr%C3%ADguez/',
    },
    {
      title: 'GitHub Profile',
      icon: 'mdi-github',
      link: 'https://github.com/MiauRos',
    },
    {
      title: 'Web Page',
      icon: 'mdi-web',
      link: 'https://miauros.github.io/',
    },
    {
      title: 'Facebook',
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/cmauricio.rosalesrdz',
    },
    {
      title: 'Instagram',
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com/sout_miau/',
    },
    {
      title: 'WhatsApp',
      icon: `mdi-whatsapp`,
      link: 'https://wa.me/524445741411',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(var(--v-theme-primary))
</style>
