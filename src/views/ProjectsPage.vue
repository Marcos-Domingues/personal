<template>
  <div class="container pb-[121px] mb-[52px]">
    <div class="page-title mb-[21px]">
      <branch-icon />
      <h1>
        Projetos
      </h1>
    </div>

    <div class="flex gap-6">
      <project-card :example-image="projectsObject[0].exampleImage" :project-data="projectsObject[0]" :first-card="true"/>
      <div class="flex gap-6 flex-col">
        <project-card v-for="(project, index) in projectsArray" :key="index" :project-data="project"/>
      </div>
    </div>
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
  data() {
    return {
      projectsObject: [
        {
          name: 'Titulo do projeto',
          description: 'Texto breve descritivo - Office ipsum you must be muted. Opportunity before moments food community regroup donuts window.',
          technologies: ['Javascript', 'Vue'],
          link: 'https://www.google.com',
          exampleImage: true
        },
        {
          name: 'Titulo do projeto',
          description: 'Texto breve descritivo - Office ipsum you must be muted. Opportunity before moments food community regroup donuts window.',
          technologies: ['Javascript', 'Vue', 'Nuxt'],
          link: 'https://www.google.com'
        },
        {
          name: 'Titulo do projeto',
          description: 'Texto breve descritivo - Office ipsum you must be muted. Opportunity before moments food community regroup donuts window.',
          technologies: ['Javascript', 'Vue', 'Laravel', 'Tailwind'],
          link: 'https://www.google.com'
        },
      ]
    }
  },
  computed: {
    projectsArray() {
      return this.projectsObject.filter((item, index)=> {
        if(index !== 0) {
          return item
        }
      })
    }
  }
};
</script>
