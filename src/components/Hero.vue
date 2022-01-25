<template>
  <div class="hero__bg">
    <Header/>

     <div class="container lg:mx-16 mx-0 py-8 lg:px-8 px-4">
         <section class="flex justify-between items-center mx-8">
          <div class="w-1/3">
              <h2 class="text-white leading-relaxed text-4xl font-bold py-3">
                The cheap, fast way to send money abroad.
              </h2>
              
             <span class="flex items-center my-16">
              <button class="flex h-24 w-24">
                <span class="animate-ping absolute inline-flex h-24 w-24 rounded-full bg-primary opacity-75 scale-1 transform translate-0  duration-0 ease-in-out"></span>
                <svg viewBox="0 0 109 109" class="text-primary relative w-24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="54.5" cy="54.5" r="53" fill="currentColor">
                    </circle><path d="M72 54.6162L45.5758 69.8722L45.5758 39.3601L72 54.6162Z" fill="white"></path>
                </svg>
             </button>
              <p class="text-primary text-lg font-semibold pl-6"> See how it works</p>
             </span>



          <div class="lg:pt-16 lg:py-8 lg:flex  block justify-between space-x-4">
           
           <span>
             <p class="text-white text-lg font-bold"> Over 11 million customers </p>
             <a target="_blank" rel="" class="inline-flex text-primary font-bold" href="https://www.trustpilot.com/review/wise.com">
              Read on Trustpilot
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
             </a>
          </span>

          <span>
             <p class="text-white text-lg font-bold">FCA regulated</p>
             <a target="_blank" rel="" class="inline-flex text-primary font-bold" href="https://www.trustpilot.com/review/wise.com"> 
               Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
             </a>
          </span>
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
