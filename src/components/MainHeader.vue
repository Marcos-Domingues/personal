<template>
  <nav class="container">
    <md-logo ></md-logo>
    <div class="items">
      <span class="home-style item">
        <p class="item" @click="RedirectTo('homeSection')">
            início
        </p>
      </span>
      <p class="item">
        <router-link to="/projects">
          projetos
        </router-link>
      </p>
      <p class="item">
          sobre
      </p>
      <p class="item">
          contato
      </p>
      <translate-icon></translate-icon>
    </div>
  </nav>
</template>
<script>
import TranslateIcon from "@/icons/TranslateIcon.vue";
import MdLogo from "@/icons/MdLogo.vue";

export default {
  name: "main-header",
  components: {
    MdLogo,
    TranslateIcon,
  },

  methods: {
    RedirectTo(ref) {
      this.$emit('redirectToSection', ref)
    }
  }
};
</script>
<style scoped postcss>
nav {
  @apply flex justify-between h-[93px] items-center;
}

.items {
  @apply flex flex-row;
}

.item {
  @apply text-white cursor-pointer mr-7;
}

.home-style {
  @apply after:content-["/>"] before:content-["<"] text-[#4AACB8] flex flex-row;
}

.home-style p {
  @apply mx-1;
}
</style>