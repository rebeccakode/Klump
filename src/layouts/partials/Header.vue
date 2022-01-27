
<template>

<div>
   <section class="bg-darkblue" v-if="alertOpen">
      <div class="container lg:mx-12 mx-0 py-4 lg:px-12 px-2 flex flex-wrap lg:justify-between justify-around">
        <div>
          <span class="text-yellow inline-flex">
              <svg width="16" height="16" fill="currentColor" focusable="false"><path d="M11.863 1.63a.52.52 0 01-.233.233l-1.342.671a.52.52 0 000 .932l1.342.67c.101.051.183.133.233.234l.671 1.342a.52.52 0 00.931 0l.672-1.342a.52.52 0 01.233-.233l1.342-.671a.52.52 0 000-.932l-1.342-.67a.52.52 0 01-.233-.234L13.466.288a.52.52 0 00-.931 0l-.672 1.342z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.238 3.456a.825.825 0 00-1.476 0L3.993 6.993.456 8.762a.825.825 0 000 1.476l3.537 1.769 1.769 3.537a.825.825 0 001.476 0l1.769-3.537 3.537-1.769a.825.825 0 000-1.476L9.007 6.993 7.238 3.456zM5.347 7.978L6.5 5.67l1.153 2.307c.08.16.21.289.37.369L10.328 9.5l-2.307 1.153c-.16.08-.289.21-.369.37L6.5 13.328l-1.153-2.307a.825.825 0 00-.37-.369L2.672 9.5l2.307-1.153c.16-.08.289-.21.369-.37z"></path></svg>
            </span>
          <span class="text-lg font-bold tracking-wider text-white">
             TransferWise is now Wise. <router-link to="" class="text-primary hover:bg-primary underline"> Read more. </router-link> 
          </span>
        </div>

        <button title="Close banner" class="text-primary" type="button" v-on:click="closeAlert()">
          <span>
            <svg width="24" height="24" fill="currentColor" focusable="false">
              <path d="M12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414z"></path></svg>
          </span>
        </button>
      </div>
    </section>

 <div class="container lg:mx-12 mx-0 py-8 lg:px-12 px-4">
   <nav class="flex flex-wrap items-center justify-between container mx-auto w-full">
        <div class="flex flex-row flex-wrap">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg width="95" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M93.669 10.69c0-5.382-3.75-9.167-9.007-9.167-6.692 0-11.177 4.862-11.177 11.805 0 5.418 3.786 9.167 9.132 9.167 4.862 0 8.486-2.35 9.975-6.1h-5.4c-.718 1.167-2.243 1.902-4.108 1.902-2.871 0-4.665-1.902-4.827-4.593h15.107c.197-1.022.305-1.901.305-3.014zm-14.999-.628c.484-2.475 2.889-4.449 5.795-4.449 2.512 0 4.413 1.83 4.413 4.45H78.67zM58.971 22.01l.969-5.166c2.96.592 3.409-1.077 4.18-5.095l.377-1.992c1.076-5.615 3.247-8.414 9.455-7.66l-.97 5.167c-2.96-.592-3.48 1.65-4.143 5.13l-.377 1.992c-1.077 5.687-3.32 8.378-9.49 7.625zM51.723 22.029l3.66-20.022h4.826l-3.642 20.022h-4.844zM24.076 2.007h4.683l1.525 14.478L36.42 2.007h4.646L42.7 16.629l5.92-14.622h4.665l-8.486 20.022h-5.31L37.765 8.25 31.9 22.03h-5.131L24.076 2.007z" fill="#fff"/><path d="M6.584 7.317l-5.561 5.31h9.454l.987-2.313h-4.79L9.67 7.317 7.93 4.321h8.127l-7.5 17.708h2.817L19.86 2.007H3.463l3.121 5.31z" fill="#00B9FF"/></svg>           
        </div>

        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto divide-x">
          <div class="flex flex-cols space-x-4 text-sm font-bold">
            <router-link to="/https://wise.com" class="text-primary" title="Personal">Personal</router-link>
             <router-link to="/https://wise.com" class="text-white hover:text-primary border-l px-3" title="Business">Business</router-link>
          </div>
      </div>  


        </div>
      <ul class="flex space-x-2">
           <MenuDropdown>
            <template slot="toggler">
              <button class="relative flex items-center focus:outline-none pl-5 pr-3 text-sm py-2 hover:text-primary text-white font-semibold" >
                 Money transfer
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
              </button>
            </template>

            <MenuDropdownContent>
              <MenuDropdownItem>Action 1</MenuDropdownItem>
              <MenuDropdownItem>Action 2</MenuDropdownItem>
              <MenuDropdownItem>Action 3</MenuDropdownItem>
            </MenuDropdownContent>
          </MenuDropdown> 

          <MenuDropdown>
            <template slot="toggler">
              <button class="relative flex items-center focus:outline-none pl-5 pr-3 text-sm py-2 hover:text-primary text-white font-semibold" >
               Multi-currency-account
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
              </button>
            </template>

            <MenuDropdownContent>
              <MenuDropdownItem>Action 1</MenuDropdownItem>
              <MenuDropdownItem>Action 2</MenuDropdownItem>
              <MenuDropdownItem>Action 3</MenuDropdownItem>
            </MenuDropdownContent>
          </MenuDropdown> 


          <li class="px-3 mt-2"><router-link to="/register" class="
            text-sm font-semibold  p-2 hover:text-primary text-white" > Help </router-link> </li>

          <MenuDropdown>
            <template slot="toggler">
              <button class="relative flex items-center text-sm focus:outline-none pl-5 pr-3 py-2 hover:text-primary text-white font-semibold" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
               </svg> EN
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current hover:text-primary text-white"><path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
              </button>
            </template>

            <MenuDropdownContent>
              <MenuDropdownItem>Action 1</MenuDropdownItem>
              <MenuDropdownItem>Action 2</MenuDropdownItem>
              <MenuDropdownItem>Action 3</MenuDropdownItem>
            </MenuDropdownContent>
          </MenuDropdown> 

           <li class="px-3 mt-2"><router-link to="/register" class="
            text-sm font-semibold  p-2 hover:text-primary text-white" > Login </router-link> </li>

          <li class="px-3 mt-2"><router-link to="/register" class="border p-3 rounded hover:bg-primary hover:text-white text-sm font-semibold border-primary p-2 text-primary" > Register </router-link> </li>
      </ul>
      <span class="absolute top-0 left-0 w-3 h-3 bg-gray-200 border transform rotate-45 -mt-1 ml-6"></span>

    </nav>
 </div> 
 </div>
</template>

<script>
import MenuDropdown from '../../components/Dropdown.vue/MenuDropdown.vue';
import MenuDropdownContent from '../../components/Dropdown.vue/MenuDropdownContent.vue';
import MenuDropdownItem from '../../components/Dropdown.vue/MenuDropdownItem.vue';
export default {
  components: { 
     MenuDropdownContent,
     MenuDropdownItem,
     MenuDropdown },
  name: 'Header',
  data() {
   return {
      alertOpen: true
    }
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    }
  }
}
</script>


<style>

</style>