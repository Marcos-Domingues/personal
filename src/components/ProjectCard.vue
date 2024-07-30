<template>
  <div class="card"> 
  <img v-if="wideCard" src="" alt="">
  <span class="title">Project Name</span>
  <p class="subtitle">
    Texto breve descritivo - Office ipsum you must be muted. Opportunity before moments food community regroup donuts window.
  </p>
  <div class="buttons">
    <div class="abilities">
      <div class="qualification">
        Javascript
      </div>
      <div class="qualification">
        Vue
      </div>
    </div>
    <a href="projectlink.">

    </a>
  </div>
  </div>
</template>
<script>
export default {
  name: "project-card",
  props: {
    wideCard: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="postcss" scoped>
.card {
  @apply container border-[4AACB8] border;
}
.title {
  @apply text-[18px];
}
</style>