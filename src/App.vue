<template>
<section>
 <main-header @redirectToSection="redirectByRef" />
 <section ref="homeSection">
  <home-page />
 </section>
 <section ref="projectsSection" class="background-gradient">
  <projects-page />
 </section>
 <section>
  <abilities-page ref="abilitiesSection"/>
 </section>
</section>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import HomePage from "./views/HomePage.vue";
import ProjectsPage from "./views/ProjectsPage.vue";
import AbilitiesPage from "./views/AbilitiesPage.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    HomePage,
    ProjectsPage,
    AbilitiesPage
  },

  methods: {
    redirectByRef(ref) {
      const htmlElement = this.$refs[ref];
      htmlElement.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
.background-gradient {
  /* background: linear-gradient(90deg, rgba(74,172,184,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 92%, rgba(74,172,184,1) 100%);
  backdrop-filter: blur(10px); */
}
</style>
