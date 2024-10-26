<template>
  <div class="background-graphs" ref="homeSection">
    <div class="container flex h-4/5 items-center">
      <div class="grid-cols-2">
        <div class="page-title">
          <branch-icon/>
          Marcos Domingues
        </div>
        <div class="leading-[57px] text-[46px] font-black mb-2">
          desenvolvedor<br>front-end.
        </div>
        <div class="max-w-[519px] mb-12 font-normal leading-5">
          com experiência em criar interfaces responsivas e de alta performance, utilizando as últimas tendências e tecnologias do mercado.
        </div>
        <div>
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
  background-image: url("../../public/images/background-hero.svg");
  @apply bg-no-repeat h-[850px] bg-right-top mb-7;
}
</style>