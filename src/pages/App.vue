<template>
  <div id="app">
    <Hero/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  name: 'App',
  components: {
    Hero
  }
}
</script>


<style lang="postcss">
  .button {
    @apply bg-red-100 px-4 py-3;

    &:hover {
      @apply bg-red-300;
    }
  }