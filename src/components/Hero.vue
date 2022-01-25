<template>
  <div class="hero__bg">
    <Header/>

     <div class="container lg:mx-16 mx-0 py-8 lg:px-8 px-4">
         <section class="flex justify-between items-center mx-8">
          <div>
           
              <h2 class="text-white text-4xl font-bold leading-12 py-3">International money <br/>transfers<span class="text-primary text-5xl">.</span></h2>
             <div class="my-4 py-2 leading-12 text-white">
               <p>Join over 11 million people who choose Wise for fast and</p>
               <p>secure online money transfers. We’re on average 8x  </p>
                cheaper than leading UK high street banks.
              
              </div>
          </div>
          <div>
             <h2>International money transfers. </h2>
          </div>
       </section>

     </div>
  </div>
</template>

<script>
import Header from '../layouts/partials/Header.vue'
export default {
  name: 'Hero',
  components: { Header },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
