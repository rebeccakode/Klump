<template>
    <div class="container">
        <div class="flex flex-wrap items-center justify-center">
          <h2 class="text-darkblue text-4xl font-semibold mb-6">Available for you in</h2>
        </div>  

       <div class="grid grid-cols-4 gap-4 mx-8 mt-8 py-4">
          <div v-for="product in productAvaliblity" :key="product"> 
                <div>
                    <img :src="product.image" />
                </div>
                <div class="flex flex-col text-center items-center px-3 justify-center">
                    <h3 class="text-h3 text-darkbluetitle font-semibold leanding-md-height">{{product.title}} </h3>
                    <p class="my-4 text-body text-base"> {{product.description}}</p>
                    <a target="_blank" rel="" class="inline-flex text-primary font-bold" href="https://www.trustpilot.com/review/wise.com"> 
                     {{product.link}}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
           </div>
      </div>
    </div>
</template>

<script>
export default {
   name:'ProductAvaliblity',
   data() {
       return {
           productAvaliblity: 
             [
               {
                image: '/images/mobil1.jpg',
                title: 'Send money cheaper and easier than old-school banks.',
                description: 'Send money at the real exchange rate with no hidden fees.',
                link: 'Send money',
                arrowIcon: ''
                
              },

              {
                image: '/images/mobil2.jpg',
                title: 'Spend abroad without the hidden fees.',
                description: 'We haven’t reached Nigeria with our debit card feature yet.',
              },
              {
                image:'/images/mobil3.jpg',
                title: 'Receive payments like a local in 9 currencies.',
                description: 'Get your own UK account number, Euro IBAN, US routing number, and more.',
                link: 'See all account details',
                arrowIcon: ''
              },

              {
                image: '/images/mobil4.jpg',
                title: 'Convert and hold 54 currencies.',
                description: 'Holding multiple currencies is completely free, and we use the real exchange rate to convert.',
                link: 'See all currencies',
                arrowIcon: ''
                
              }
           ],
       }
   }
}
</script>