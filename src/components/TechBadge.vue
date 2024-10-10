<template>
   <div class="px-3 py-[6px] bg-[#4AACB81A] text-[#4AACB8] w-auto rounded-sm">
    <h3>{{ Text }}</h3>
  </div>
</template>
<script>
export default {
  name: "tech-badge",
  props: {
    Text: {
      required: true,
      type: String
    }
  }
}
</script>