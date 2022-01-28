
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
  <div class="max-w-6xl">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <a href="#" class="flex items-center py-4 px-2">
                    <svg width="95" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M93.669 10.69c0-5.382-3.75-9.167-9.007-9.167-6.692 0-11.177 4.862-11.177 11.805 0 5.418 3.786 9.167 9.132 9.167 4.862 0 8.486-2.35 9.975-6.1h-5.4c-.718 1.167-2.243 1.902-4.108 1.902-2.871 0-4.665-1.902-4.827-4.593h15.107c.197-1.022.305-1.901.305-3.014zm-14.999-.628c.484-2.475 2.889-4.449 5.795-4.449 2.512 0 4.413 1.83 4.413 4.45H78.67zM58.971 22.01l.969-5.166c2.96.592 3.409-1.077 4.18-5.095l.377-1.992c1.076-5.615 3.247-8.414 9.455-7.66l-.97 5.167c-2.96-.592-3.48 1.65-4.143 5.13l-.377 1.992c-1.077 5.687-3.32 8.378-9.49 7.625zM51.723 22.029l3.66-20.022h4.826l-3.642 20.022h-4.844zM24.076 2.007h4.683l1.525 14.478L36.42 2.007h4.646L42.7 16.629l5.92-14.622h4.665l-8.486 20.022h-5.31L37.765 8.25 31.9 22.03h-5.131L24.076 2.007z" fill="#fff"/><path d="M6.584 7.317l-5.561 5.31h9.454l.987-2.313h-4.79L9.67 7.317 7.93 4.321h8.127l-7.5 17.708h2.817L19.86 2.007H3.463l3.121 5.31z" fill="#00B9FF"/></svg>           
                    </a>
                </div>
                <div class="hidden lg:flex items-center space-x-1">
                    <div class="flex flex-cols space-x-4 text-sm font-bold">
                       <a href="/https://wise.com" class="text-primary" title="Personal">Personal</a>
                       <a href="/https://wise.com" class="text-white hover:text-primary border-l px-3" title="Business">Business</a>
                   </div>
                </div>
            </div>
            <div class="hidden md:flex items-center space-x-3 ">
                <Navbar/> 
            </div>
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
        <ul class="">
             <Navbar/> 
        </ul>
    </div>
 </div> 
 </div>
</template>

<script>
import Navbar from '../../components/Dropdown.vue/Navbar.vue';
export default {
  components: { 
   Navbar 
   },
  name: 'Header',
  data() {
   return {
      alertOpen: true,
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