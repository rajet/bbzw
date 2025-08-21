<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const lastname = ref("");

const prefixes = [
  "Hype",
  "Biz",
  "Lolz",
  "Rofl",
  "Galaxy",
  "Biz",
  "Fan",
  "Buzz",
  "Real",
  "Solid",
  "Inter",
  "Active",
  "Swoosh",
];
const suffixes = [
  "park",
  "span",
  "cloud",
  "loop",
  "verse",
  "layer",
  "er",
  "r",
  "dot",
  "dock",
  "space",
  "yard",
  "scale",
  "signal",
  "press",
  "ware",
  "port",
];

function generate() {
  name.value = getRandomString(prefixes);
  lastname.value = getRandomString(suffixes);
}

function getRandomString(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
</script>
<template>
  <div>
    <h1>Dein Startup heisst?</h1>
    <div v-if="name && lastname">
      <p>{{ name }} {{ lastname }}</p>
    </div>
    <button @click="generate">Namen generieren</button>
  </div>
</template>

<style scoped></style>
