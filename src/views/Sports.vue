<template>
  <div class="sports">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "Bus",
  components: {
    Hero,
  },
};
</script>

<style scoped></style>
