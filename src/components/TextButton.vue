<template>
  <button :style="`background-color: ${bgColor}; color: ${textColor}; border-color: ${borderColor}`" :class="['py-3 px-6 rounded-sm',{'border': bordered}]">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "text-button",

  props: {
    text: {
      default: "",
      type: String,
    },
    bgColor: {
      default: "#4AACB810",
      type: String,
    },
    textColor: {
      default: "#4AACB8",
      type: String,
    },
    bordered: {
      default: false,
    },
    borderColor: {
      default: "#4AACB826",
    },
  },
};
</script>