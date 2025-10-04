<template>
  <div class="border-[1px] border-[#272A33] bg-[#13161F] w-[120px] h-[103px] p-4 rounded m-6">
    <div class="w-[34px] h-[34px] bg-[#272A33] rounded-full pl-2 pt-2">
      <component :is="itemData.icon"/>
    </div>
    <h2>{{ itemData.name }}</h2>
  </div>
</template>
<script>
import CssIcon from '@/icons/abilities-icons/CssIcon.vue';
import FigmaIcon from '@/icons/abilities-icons/FigmaIcon.vue';
import GitIcon from '@/icons/abilities-icons/GitIcon.vue';
import HtmlIcon from '@/icons/abilities-icons/HtmlIcon.vue'; 
import JavascriptIcon from '@/icons/abilities-icons/JavascriptIcon.vue';
import LaravelIcon from '@/icons/abilities-icons/LaravelIcon.vue';
import NodeIcon from '@/icons/abilities-icons/NodeIcon.vue';
import NuxtIcon from '@/icons/abilities-icons/NuxtIcon.vue';
import SassIcon from '@/icons/abilities-icons/SassIcon.vue';
import TailwindIcon from '@/icons/abilities-icons/TailwindIcon.vue';
import TypescriptIcon from '@/icons/abilities-icons/TypescriptIcon.vue';
import VueIcon from '@/icons/abilities-icons/VueIcon.vue';

export default {
  components: {
    CssIcon,
    FigmaIcon,
    GitIcon,
    HtmlIcon,
    JavascriptIcon,
    LaravelIcon,
    NodeIcon,
    NuxtIcon,
    SassIcon,
    TailwindIcon,
    TypescriptIcon,
    VueIcon
  },
  props: {
    itemData: {
      required: true,
      type: {}
    }
  }
}
</script>