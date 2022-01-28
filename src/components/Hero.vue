<template>
  <div>
     <div class="container mx-auto lg:py-8 lg:px-16 px-4">
         <section class="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <div class="col-span-2 lg:mx-0 mx-6">
            <div class="flex flex-col">
               <h2 class="text-white leading-relaxed lg:order-1 order-2 text-4xl font-bold py-3">
                The cheap, fast way to send money abroad.
              </h2>
            <div class="flex items-center justify-center lg:justify-start relative lg:order-2 order-1 lg:my-3 lg:py-8 my-6">
              <div class="h-[4.5rem] w-[4.5rem] lg:h-[6.875rem] lg:w-[6.875rem] relative before:animate-spin-slow before:translate-x-2/4 before:translate-y-2/4 before:scale-100 before:opacity-60 before:absolute before:h-full before:w-full before:bg-accent before:rounded-full before:content-[''] before:right-1/2 before:bottom-1/2 before:bg-accent before:border-none">
                <button type="button" aria-label="Play video" aria-expanded="false" class="h-full w-full text-accent rounded-full border-none overflow-hidden relative bg-[0 0]">
                  <svg viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg" class="rounded-full">
                    <circle cx="54.5" cy="54.5" r="53" fill="currentColor"></circle>
                    <path d="M72 54.6162L45.5758 69.8722L45.5758 39.3601L72 54.6162Z" fill="white"></path>
                  </svg>
                </button>
              </div>
              <button type="button" class="text-accent hidden lg:block bg-transparent pt-3 pb-2.5 px-6 rounded-sm font-semibold min-h-[3rem] text-md"
                      aria-label="Play video" aria-expanded="false">See how it works
              </button>
            </div>
          </div>

            <div class="lg:pt-12 py-8 lg:flex  block justify-start space-x-8">
            <span>
              <p class="text-white text-lg font-bold"> Over 11 million customers </p>
              <a target="_blank" rel="" class="inline-flex text-primary font-bold" href="https://www.trustpilot.com/review/wise.com">
                Read on Trustpilot
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              </a>
            </span>
            <span class="pl-8">
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

           <div class="relative col-span-2 lg:mx-16 mx-6">
                <RateExchangeForm/>
          </div>
       </section>
     </div>
  </div>
</template>

<script>
import RateExchangeForm from './RateExchangeForm.vue'

export default {
  name: 'Hero',
  components: { 
    RateExchangeForm,
    },
  data(){
    return{
      seleected:'',
      counties:[
         {title:'United State'},
         {title:'United State'},
         {title:'United State'},
         {title:'United State'},
      ]
        
      }
    }
  }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
