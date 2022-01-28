<template>
    <div class="container">
        <div class="flex flex-wrap items-center justify-center">
          <h2 class="text-darkbluetitle text-4xl font-semibold mb-6">Available for you in</h2>
          
          <div class="w-48 p-4">
           <button class="bg-gray-100 w-48 p-4 flex text-3xl font-bold justify-between hover:border-primary dropdown-toggle" type="button" aria-expanded="false">
             <span class="text-darkbluetitle">Nigeria</span>
             <span class="mt-2 text-primary font-bold" aria-hidden="true" role="presentation">
               <svg width="17" height="17" fill="currentColor"  focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z">
                 </path></svg>
                 
                 </span>
                 </button>
          </div>
        </div>  


       <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 mx-8 mt-8 py-4">
          <div v-for="product in productAvaliblity" :key="product"> 
                <div class="flex flex-col justify-between">
                    <img :src="product.image" />
                </div>
                <div class="flex flex-col text-center items-center px-3 justify-center">
                    <h3 class="text-h3 text-darkbluetitle font-semibold leanding-md-height h-24">{{product.title}} </h3>
                    <p class="my-4 text-body text-base"> {{product.description}}</p>
                    <a target="_blank" rel="" class="inline-flex text-primary font-bold" href="https://www.trustpilot.com/review/wise.com"> 
                     {{product.link}}
                    </a>
                     <img :src="product.icon" />
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
         selected: null,
           productAvaliblity: 
             [
               {
                image: '/images/mobil1.jpg',
                title: 'Send money cheaper and easier than old-school banks.',
                description: 'Send money at the real exchange rate with no hidden fees.',
                link: 'Send money',
                icon: '/images/arrowicon.svg',
                
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
                icon: '/images/arrowicon.svg',
              },

              {
                image: '/images/mobil4.jpg',
                title: 'Convert and hold 54 currencies.',
                description: 'Holding multiple currencies is completely free, and we use the real exchange rate to convert.',
                link: 'See all currencies',
                icon: '/images/arrowicon.svg',
              }
           ],
       }
   },
}
</script>