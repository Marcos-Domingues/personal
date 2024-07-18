<template>
  <div class="background-graphs">
    <div class="container flex h-4/5 items-center">
      <div class="grid-cols-2">
        <div class="flex items-center text-xs uppercase text-water gap-2 mb-4 tracking-wide">
          <branch-icon/>
          Marcos Domingues
        </div>
        <div class="leading-[57px] text-[46px] font-black mb-2">
          desenvolvedor<br>front-end.
        </div>
        <div class="max-w-[519px] mb-12 font-normal leading-5">
          com experiência em criar interfaces responsivas e de alta performance, utilizando as últimas tendências e tecnologias do mercado.
        </div>
        <div class="home__buttons">
          <text-button text="ver projetos" bgColor="#213D47" class="mr-6"/>
          <text-button text="entre em contato" bgColor="transparent" :bordered="true"/>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import BranchIcon from "@/icons/BranchIcon.vue";
import TextButton from "@/components/TextButton.vue";
export default {
  name: "home-page",

  components: {
    BranchIcon,
    TextButton,
  },
};
</script>
<style scoped postcss>
.background-graphs {
  background-image: url("../images/background-hero.svg");
  @apply bg-no-repeat h-[850px] bg-[1119px,790px] bg-right-top mb-7;
}
</style>