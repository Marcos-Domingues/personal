<template>
  <footer>
    <md-logo alt="Logo Marcos Domingues"/>
    <nav aria-label="Footer links">
      <letter-icon alt="Enviar email para dominguesviniciusmarcos@gmail.com"/>
      <github-icon alt="Ver repositórios no GitHub — marcos-domingues"/>
      <linked-in-icon alt="Ver perfil no LinkedIn — Marcos Domingues"/>
    </nav>
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