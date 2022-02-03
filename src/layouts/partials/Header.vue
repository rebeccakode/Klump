
<template>

<div>
   <section class="bg-darkblue" v-if="alertOpen">
      <div class="lg:mx-12 mx-0 py-4 lg:px-12 px-2 flex flex-wrap lg:justify-between justify-around">
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

 <div class="container mx-auto py-8 ml-5rem">
  <div class="max-w-6xl">
        <div class="flex lg:justify-between">
            <div class="flex space-x-2">
              <span class="lg:hidden relative text-primary arrow-right  cursor text-3xl mt-2" @click="sideNavMobile">&#9776;</span>
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

            <div class="hidden md:flex items-center pl-[6.25rem]">
                <Navbar/> 
            </div>

            <div class="mt-4 lg:pl-0 pl-[6.25rem]">
              <a href="/register" class="border p-3 rounded hover:bg-primary 
              hover:text-white text-sm font-semibold border-primary p-2 text-primary" > 
              Register 
              </a>
            </div>
            
           
            <div class="md:hidden items-center order-first">
              <div class="fixed z-10 visible-bg  top-0 left-0 arrow-right  w-full h-full z-10" v-if="sidebar" :class="sidebar ? 'sidenav' : '' ">
                
                <div class="flex justify-between p-8 closed">
                    <a href="#" class="flex items-center py-4 px-2">
                    <svg width="95" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M93.669 10.69c0-5.382-3.75-9.167-9.007-9.167-6.692 0-11.177 4.862-11.177 11.805 0 5.418 3.786 9.167 9.132 9.167 4.862 0 8.486-2.35 9.975-6.1h-5.4c-.718 1.167-2.243 1.902-4.108 1.902-2.871 0-4.665-1.902-4.827-4.593h15.107c.197-1.022.305-1.901.305-3.014zm-14.999-.628c.484-2.475 2.889-4.449 5.795-4.449 2.512 0 4.413 1.83 4.413 4.45H78.67zM58.971 22.01l.969-5.166c2.96.592 3.409-1.077 4.18-5.095l.377-1.992c1.076-5.615 3.247-8.414 9.455-7.66l-.97 5.167c-2.96-.592-3.48 1.65-4.143 5.13l-.377 1.992c-1.077 5.687-3.32 8.378-9.49 7.625zM51.723 22.029l3.66-20.022h4.826l-3.642 20.022h-4.844zM24.076 2.007h4.683l1.525 14.478L36.42 2.007h4.646L42.7 16.629l5.92-14.622h4.665l-8.486 20.022h-5.31L37.765 8.25 31.9 22.03h-5.131L24.076 2.007z" fill="#fff"/><path d="M6.584 7.317l-5.561 5.31h9.454l.987-2.313h-4.79L9.67 7.317 7.93 4.321h8.127l-7.5 17.708h2.817L19.86 2.007H3.463l3.121 5.31z" fill="#00B9FF"/></svg>           
                    </a>
                    <a href="javascript:void(0)" class="flex justify-end transition arrow-right text-3xl text-primary mt-2" @click="sideNavMobile">X</a>
                </div>
                
                <div class="flex space-x-6 bg-darkblue py-4">
                  <div class="mx-6 p-4 text-lg">
                    <span class="navbar-btn  pr-3 border-r">
                    <a href="/" class="text-primary" title="Personnel">Personnel</a>
                    </span>          
                    <span class="navbar-btn pl-4">
                      <a href="/gb/business/" class="text-white" title="Entreprise">Entreprise</a>
                    </span>
                  </div>
                </div>
               
               <div class="p-4 mt-3 flex flex-col">

                 <div class=" mt-2 cursor-pointer">
                  <div v-on:click="isOpen = !isOpen" class="text-lg leading-md-height font-semibold flex justify-between px-6 my-3 items-start">
                    <h5 class="text-white hover:text-primary"> Money transfer</h5>
                    <span class="accordion-icon" :class="isOpen ? 'accordion-icon-transform-up' : 'bg-transparent'">
                      <svg width="16" height="16" fill="#00b9ff" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="px-2 accordion-text" :class="isOpen ? 'block' : 'hidden'">
                    <slot></slot>
                    <ul class="leading-8 text-white">
                     <li> Send Money </li>
                     <li> Send large amounts</li>
                     <li> About Wist </li>
                   </ul>
                  </div>
                </div>

                 <div class=" mt-2 cursor-pointer">
                  <div v-on:click="open = !open" class="text-lg leading-md-height font-semibold flex justify-between px-6 my-3 items-start">
                    <h5 class="text-white hover:text-primary"> Multi-currency account</h5>
                    <span class="accordion-icon" :class="isOpen ? 'accordion-icon-transform-up' : 'bg-transparent'">
                      <svg width="16" height="16" fill="#00b9ff" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="px-2 accordion-text" :class="open ? 'block' : 'hidden'">
                    <slot></slot>
                    <ul class="leading-8 text-white">
                      <li class="text-base   text-white leading-8" >Product features</li>
                      <li class="text-base   text-white leading-8">Pricing</li>
                        <li class="text-base text-white" >Use cases</li>
                        <li class="text-base text-white leading-8">Getting started</li>
                        <li class="text-base text-white leading-8" >Protecting your money</li>
                        <li class="text-base text-white leading-8">Coverage</li>
                   </ul>
                  </div>
                </div>
                
               <div  class="text-lg leading-md-height  font-semibold flex justify-between px-6 my-3 items-start">
                <a href="" class="text-primary"> Aid</a>
               </div>

                <div class=" mt-2 cursor-pointer">
                  <div v-on:click="isOpenFr = !isOpenFr" class="text-lg leading-md-height font-semibold flex justify-between px-6 my-3 items-start">
                    <h5 class="text-white hover:text-primary inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                  </svg> FR </h5>
                    <span class="accordion-icon mr-2" :class="isOpenFr ? 'accordion-icon-transform-up' : 'bg-transparent'">
                      <svg width="16" height="16" fill="#00b9ff" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="px-2 accordion-text" :class="isOpenFr ? 'block' : 'hidden'">
                    <slot></slot>
                    <ul class="leading-8 text-white">
                     
                      <li>
                      <button type="button" class=""> <strong class="">Deutsch</strong> </button>
                      </li>

                    <li>
                        <button>
                          <span class="text-white inline-flex">English (UK)</span>
                          <span class="inline-flex text-primary pull-xs-right pull-md-none"
                          aria-hidden="true"
                          role="presentation">
                          <svg width="16" height="16" fill="currentColor" focusable="false">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 8.571L1.122 7.44l3.902 3.934 9.854-9.934L16 2.571 5.024 13.637 0 8.571z"
                            ></path></svg
                        ></span>
                      </button>
                  </li>
                    <li>
                      <button type="button" class="">
                        Español
                      </button>
                    </li>
                    <li>
                      <button type="button"
                        class="items-center">
                        Français
                      </button>
                    </li>
                    <li>
                      <button type="button" class="flex items-center"
                      >Italiano
                      </button>
                    </li>
                    <li>
                      <button type="button" class="flex items-center">
                       Bahasa Indonesia
                      </button>
                    </li>
                    <li>
                      <button type="button" class="flex items-center">
                       Magyar
                      </button>
                    </li>
                    <li>
                      <button type="button"
                        class="items-center">
                        Polski
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                       Português
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                        Română
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                       >Türkçe
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                       Русский
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                        日本語
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                       繁體中文 (香港)
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="items-center"
                      >
                       Українська
                      </button>
                    </li>
                    </ul>
                  </div>
                </div>
               </div>


              <div class="mx-6 p-4 text-lg">
                <button class="border-primary hover:bg-primary hover:text-white text-primary border w-full py-3 rounded"> Login </button>
                 <button class="w-full py-4 mt-6 rounded mb-8 text-white" style="background:#00b9ff"> Register </button>
              </div>
              </div>
             </div>
        </div>
    </div>
 </div> 
 </div>
</template>

<script>
// import Accordion from '../../components/Accordion.vue';
import Navbar from './Navbar.vue';
export default {
  components: { 
   Navbar,
    // Accordion,
   },
  name: 'Header',
  data() {
   return {
      sidebar: false,
      alertOpen: true,
      isOpen: false,
      open: false,
      isOpenFr:false,
      isActive: null,
     
    }
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    },
    sideNavMobile() {
        this.sidebar = !this.sidebar
      
    }
  },

}
</script>



<style scoped>
.sidenav {
  overflow-x: hidden;
  transition: .5s ease-out;
  z-index: 999;

} 

</style> 