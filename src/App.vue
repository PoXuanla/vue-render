<script setup>
import renderHeading from "./renderHeading";
import { ref } from "vue";
const a = ref("dd");
</script>

<template>
  <render-heading :level="1"
    ><template #header>
      <div>header</div>
    </template></render-heading
  >
  <render-heading :level="2">{{ a }}</render-heading>
  <render-heading :level="3">嗨嗨</render-heading>
  <render-heading :level="4">嗨嗨</render-heading>
  <render-heading :level="5">ee</render-heading>
  <render-heading :level="6">嗨嗨</render-heading>
</template>

<style scoped></style>
