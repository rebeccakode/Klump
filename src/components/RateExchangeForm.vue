<template>
    <form class="w-full"> 
       
        <div class="flex items-center">
            <div class="w-2/8">
                <label class="block mb-1 absolute z-10 text-gray-600 px-4" for="formGridCode_name">You send</label>
                <input value="1000" class=" w-full rounded-l relative p-6 mt-2 text-lg font-bold hover:border hover:border-primary focus:outline-none" type="text" id="formGridCode_name"/>
            </div>
           
            <div class="w-1/3">
                <!-- <CountryList/> -->
                <select class="w-full p-7 mt-1.5 bg-darkblue text-white focus:outline-none hover:border hover:border-primary">
                <option>
                    <CountryFlag country='ng' size='normal'/>NGN</option>
                </select>
           </div>
        </div>

        <div class="flex flex-col my-6">
            <span class="inline-flex">
                <span class="bg-darkblue rounded-full text-white w-6 h-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
                </span>
                <p class="inline-flex text-white text-base font-bold pl-4">5.53 GBP </p>
                 <div class="w-1/2 ml-8 text-base">
                    <select class="focus:outline-none bg-darkblue text-white -mt-2 font-normal w-full p-2">
                    <option>Cose lower transfer</option>
                    <option>1 </option>
                    <option>1 </option>
                    </select>
                </div> 
                <p class="inline-flex text-ashgray pl-4">fee</p>     
            </span>

            <span class="inline-flex py-3 text-ashgray">
                <span class="bg-darkblue rounded-full text-white w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </span>
                <span class="px-4 text-base text-base">993.58 GBP</span>  
                <span class=""> Amount we’ll convert</span>
            </span>

            <div class="flex flex-wrap pt-4">
                <span class="bg-darkblue rounded-full text-white w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </span>
                <span class="px-4 text-primary hover:opacity-50 text-base">522.636</span>  
                <span class="ml-6 text-ashgray hover:text-primary hover:opacity-50  text-base"> Guaranteed rate (2hrs)</span>
            </div>
        </div> 
            
        <div class="flex items-center">
            <div class="w-2/8">
                <label class="block mb-1 absolute z-10 text-gray-600 px-4" for="formGridCode_name">You send</label>
                <input value="1000" class=" w-full rounded-l relative p-6 mt-2 text-lg font-bold hover:border hover:border-primary focus:outline-none" type="text" id="formGridCode_name"/>
            </div>

            <div class="w-1/3">
                <!-- <CountryList/> -->
                <select class="w-full p-7 mt-1.5 bg-darkblue text-white focus:outline-none hover:border hover:border-primary">
                <option>
                    <CountryFlag country='ng' size='normal'/>NGN</option>
                </select>
           </div>
        </div>
       
        <div class="flex flex-wrap space-y-4 md:space-y-0 text-white my-3">
            <div class="text-center text-base border-r-2 border-darkblue px-4"> 
                <p>You could save vs banks </p>
                <strong> 43.95 GBP </strong>
            </div>

            <div class="text-center text-base pl-6"> 
                <p>Should arrive
                <br> <strong> 40 minutes </strong> </p>
            </div>
        </div>

        <div class="text-center items-center w-full mx-auto px-8 -ml-8">
            <a class="bg-btnsucess p-3.5 wf-ull rounded-sm  border-btnsucess text-white font-bold block" href="/register?redirectUrl=%2Fsend%23%3Famount%3D1000%26sourceCurrency%3DGBP%26targetCurrency%3DNGN%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&amp;country=NG" target="_top">
             Get started</a>
        </div>
    </form> 
</template>

<script>
// import CountryList from './CountryList.vue'
import CountryFlag from 'vue-country-flag';

export default {
    
  components: { CountryFlag },
    name: 'RateExchangeForm',
}
</script>