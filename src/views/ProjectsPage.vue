<template>
  <div class="container">
    <branch-icon />
    Projetos

    <project-card />
  </div>
</template>
<script>
import BranchIcon from "@/icons/BranchIcon.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: {
    BranchIcon,
    ProjectCard,
  },
};
</script>
