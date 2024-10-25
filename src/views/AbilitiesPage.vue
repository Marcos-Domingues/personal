<template>
  <div class="container">
    <div class="page-title">
      <branch-icon />
      <h1>
        Habilidades técnicas
      </h1>
    </div>
    <div>
      <abilities-card v-for="(item, index) in abilitiesArray" :key="index" :item-data="item" />
    </div>
  </div>
</template>
<script>
import AbilitiesCard from '@/components/AbilitiesCard.vue';
import BranchIcon from '@/icons/BranchIcon.vue';

export default {
  components: {
    BranchIcon,
    AbilitiesCard
  },
  
  data() {
    return {
      abilitiesArray: [{
          name: 'Nuxt.js',
          icon: 'nuxt-icon'
        },
        {
          name: 'TypeScript',
          icon: 'typescript-icon'
        },
        {
          name: 'Javascript',
          icon: 'javascript-icon'
        },
        {
          name: 'Css',
          icon: 'css-icon'
        },
        {
          name: 'Html',
          icon: 'html-icon'
        },
        {
          name: 'Vue.js',
          icon: 'vue-icon'
        },
        {
          name: 'Git',
          icon: 'git-icon'
        },
        {
          name: 'Sass',
          icon: 'sass-icon'
        },
        {
          name: 'Node.js',
          icon: 'node-icon'
        },
        {
          name: 'Tailwind',
          icon: 'tailwind-icon'
        },
        {
          name: 'Laravel',
          icon: 'laravel-icon'
        },
        {
          name: 'Figma',
          icon: 'figma-icon'
        },
      ]
    }
  }
}
</script>