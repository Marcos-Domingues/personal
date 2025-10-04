<template>
  <footer class="container flex items-center flex-col mt-20 mb-8">
    <md-logo alt="Logo Marcos Domingues" class="mb-6 w-16 h-10"/>
    <nav class="flex gap-6" aria-label="Footer links">
      <letter-icon alt="Enviar email para dominguesviniciusmarcos@gmail.com"/>
      <github-icon alt="Ver repositórios no GitHub — marcos-domingues"/>
      <linked-in-icon alt="Ver perfil no LinkedIn — Marcos Domingues"/>
    </nav>
    <p class="text-white text-sm mt-6">Copyright © Marcos Domingues</p>
    <p class="text-white text-sm mt-6">Designed by icka.dev</p>
  </footer>
</template>
<script>
import LetterIcon from '../icons/LetterIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import MdLogo from '../icons/MdLogo.vue';
import LinkedInIcon from '../icons/LinkedInIcon.vue';
export default {
  name: "main-footer",
  components: { 
    MdLogo,
    LetterIcon,
    GithubIcon,
    LinkedInIcon
  }
}
</script>