<script setup lang="ts">
import { computed, ref } from "vue";

const celsius = ref(0);
const fahrenheit = computed(() => celsius.value * (9 / 5) + 32);
const kelvin = computed(() => celsius.value + 273.15);
const isBelowFreezing = computed(() => celsius.value < 0);
</script>

<template>
  <h1>Wetterstation</h1>
  <p>Temperatur in Celsius: {{ celsius }} °C</p>
  <p>Temperatur in Fahrenheit: {{ fahrenheit }} °F</p>
  <p>Temperatur in Kelvin: {{ kelvin }} K</p>
  <p>Gefrierpunkt unterschritten: {{ isBelowFreezing ? "Ja" : "Nein" }}</p>
  <button @click="celsius--">Es wird kälter</button>
  <button @click="celsius++">Es wird wärmer</button>
</template>

<style scoped></style>
