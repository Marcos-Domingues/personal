<template>
  <div :class="{'w-full' : firstCard}" class="container border-[#272A33] border p-6 rounded-[3px]">
    <img v-if="projectData.exampleImage" class="w-full mb-3" src="../../public/images/example-project.png" alt="project-example">
    <h2 class="text-[18px] mb-2">{{projectData.name}}</h2>
    <h3 class="text-base font-normal mb-4">
      {{projectData.description}}
    </h3>
    <div class="flex justify-between">
      <div class="flex gap-[10px]">
        <tech-badge v-for="badge in projectData.technologies" :Text="badge" :key="badge" />
      </div>
      <div v-if="projectData.link" class="rounded-sm bg-[#4AACB842] p-[9px]" :href="projectData.link">
        <link-icon />
      </div>
    </div>
  </div>
</template>
<script>
import TechBadge from '@/components/TechBadge.vue';
import LinkIcon from '@/icons/LinkIcon.vue';
export default {
  name: "project-card",
  components: {
    TechBadge,
    LinkIcon
  },
  props: {
    projectData: {
      type: Object,
      required: true
    },
    exampleImage: {
      type: Boolean,
      default: false
    },
    firstCard: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      buttons: ['Javascript', 'Vue']
    }
  }
};
</script>