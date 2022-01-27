<template>
    <form class="w-full"> 
       
        <div class="flex items-center">
             <div class="w-2/8">
                <label class="block mb-1 absolute ml-2 z-10 text-gray-600 mt-3 text-sm px-3" for="formGridCode_name">You send</label>
                <input value="1000" class=" w-full rounded-l text-gray-700 relative p-6 mt-2.5 text-xl hover:border hover:border-primary focus:outline-none" type="text" id="formGridCode_name"/>
            </div>
           
            <div class="w-1/3 mt-1">
            <li @mouseover="flag = true" @mouseleave="flag = false" class="relative block left-0 p-0">
            <a class="relative w-full mt-1.5 p-6 flex items-center focus:outline-none bg-darkblue  hover:text-primary font-semibold" >
                  <CountryFlag country='ng' size="normal" class="-mt-1 w-32"/>
                  <span class="pl-4 mt-1 font-bold text-white"> EUR </span>
                    <span class="">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current text-primary"><path
                      d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
                   </span>
            </a>
            </li>
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
                <label class="block mb-1 absolute ml-2 z-10 text-gray-600 mt-3 text-sm px-3" for="formGridCode_name">You send</label>
                <input value="1000" class=" w-full rounded-l text-gray-700 relative p-6 mt-2.5 text-xl hover:border hover:border-primary focus:outline-none" type="text" id="formGridCode_name"/>
            </div>
           
            <div class="w-1/3 mt-1">
            <li @mouseover="flag = true" @mouseleave="flag = false" class="relative block left-0 p-0">
            <a class="relative w-full mt-1.5 p-6 flex items-center focus:outline-none bg-darkblue  hover:text-primary font-semibold" >
                  <CountryFlag country='ng' size="normal" class="-mt-1 w-32"/>
                  <span class="pl-4 mt-1 font-bold text-white"> EUR </span>
                    <span class="">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current text-primary"><path
                      d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
                   </span>
            </a>
            </li>
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

        <div class="text-center items-center w-100 pr-4">
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

    data(){
        return {
            flag:false,
        }
    }
}
</script>