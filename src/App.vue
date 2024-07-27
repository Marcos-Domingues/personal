<template>
<section>
 <main-header @redirectToSection="redirectByRef" />
  <home-page />
  <projects-page ref="projectsSection"/>
</section>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import HomePage from './views/HomePage.vue';
import ProjectsPage from './views/ProjectsPage.vue';


export default {
  name: "App",
  components: {
    MainHeader,
    HomePage,
    ProjectsPage
  },

  methods: {
    redirectByRef(ref) {
      const htmlElement = this.$refs[ref]
      htmlElement.scrollIntoView({ behavior: 'smooth'});
    }
  }
};
</script>
