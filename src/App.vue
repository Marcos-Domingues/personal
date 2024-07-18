<template>
<section>
 <main-header></main-header>
 <router-view></router-view>
</section>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>
