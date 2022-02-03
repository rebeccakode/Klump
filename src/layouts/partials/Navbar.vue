<template>
  <div class="" style="z-index:9999">
  <ul class="flex flex-wrap m-0 menu-item">
    <li @mouseover="transfer = true" @mouseleave="transfer = false" class="relative block left-0 p-0">
      <a  class="relative flex items-center focus:outline-none pl-5 pr-3 text-sm py-2 hover:text-primary text-white font-semibold" >
               Money transfer
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
      </a>
      <transition name="fade">
        <ul v-if="transfer" @click="transfer = false" class="absolute right-0 bg-white rounded shadow-lg top-12 m-0  z-50">
         <span class="absolute -top-2 right-0 w-3 h-3 bg-white transform rotate-45 mt-1 mr-4"></span>
          <li>
           <a>
               <Transfer/>
          </a>
          </li>
        </ul>
       </transition>
    </li>

    <li @mouseover="account = true" @mouseleave="account = false" class="relative block ">
      <a class="relative flex items-center focus:outline-none pl-5 pr-3 text-sm py-2 hover:text-primary text-white font-semibold" >
               Multi-currency account
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
      </a>
        <transition name="fade">
            <ul v-if="account" @click="account = false" class="absolute right-0 bg-white rounded shadow-lg top-12 m-0  z-50">
            <span class="absolute -top-2 right-0 w-3 h-3 bg-white transform rotate-45 mt-1 mr-4"></span>
            <li>
            <a>
                <MultiCurrency/>
            </a>
            </li>
            </ul>
        </transition>
    </li>

     <div>
      <li class="px-3 mt-2">
        <a to="/help" class="text-sm font-semibold  p-2 hover:text-primary text-white" > 
      Help </a> 
      </li>
     </div>  
   
    <li @mouseover="en = true" @mouseleave="en = false" class="relative block ">
      <a class="relative flex items-center focus:outline-none pl-5 pr-3 text-sm py-2 hover:text-primary text-white font-semibold" >

         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
               </svg> EN     

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
      </a>
      <transition name="fade">
        <ul v-if="en" @click="en = false" class="absolute right-0 bg-white rounded shadow-lg top-12 min-w-sm m-0 z-50">
        <span class="absolute -top-2 right-0 w-3 h-3 bg-white transform rotate-45 mt-1 mr-4"></span>
          <li>
           <a>
             <LangTitle/>
          </a>
          </li>
        </ul>
       </transition>
       
    </li>
      <li class="px-3 mt-2">
        <a href="/register" class="text-sm font-semibold  p-2 hover:text-primary text-white" > 
         Login 
          </a>
      </li> 

  </ul>
  </div>
</template>

<script>
import LangTitle from '../../components/Dropdown.vue/LangTitle.vue'
import MultiCurrency from '../../components/Dropdown.vue/MultiCurrency.vue'
import Transfer from '../../components/Dropdown.vue/Transfer.vue'
export default {
  components: { Transfer, MultiCurrency, LangTitle },
    name: 'Navbar',
    data () {
        return {
        transfer:false,
        en:false,
        account: false,
    }
  },
}
</script>

<style scoped>

.menu-item li ul li {
  transition: background .2s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.menu-item > li ul{ 
  width: 450px;
}
</style>