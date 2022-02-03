<template>
  <form class="w-full lg:xl-[3.5rem] relative lg:left-[6rem]">
    <div class="flex items-center -mt-2">
      <div class="">
        <label
          class="block mb-1 absolute ml-2 z-50 text-gray-600 text-sm mt-3 px-3"
          for="formGridCode_name"
          >You send</label
        >
        <input
          value="1000"
          class="
            w-full
            rounded-l
            text-gray-700
            relative
            p-6
            z-10
            mt-2.5
            text-xl
            hover:border hover:border-primary
            focus:outline-none
          "
          type="text"
          id="formGridCode_name"
        />
      </div>

      <div class="mt-1">
        <li
          @mouseover="flag = true"
          @mouseleave="flag = false"
          class="relative block left-0 p-0"
        >
          <a
            class="
              relative
              mt-1.5
              p-6
              flex
              items-center
              focus:outline-none
              bg-darkblue
              hover:text-primary
              font-semibold
              hover:border hover:border-ashgray
            "
           >
            <CountryFlag country="gb" size="normal" class="-mt-1" />
            <span class="pl-4 mt-1 font-bold text-white"> GBP </span>
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ml-1 h-5 w-5 fill-current text-primary"
              >
                <path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
      </div>
    </div>
    <div class="flex flex-col sequence my-6">
      <li class="list-none"> 
        <span class="inline-flex z-50 relative">
            <span class="bg-darkblue rounded-full text-white w-6 h-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
            </span>
            <p class="inline-flex text-white text-base font-bold pl-4">5.53 GBP</p>
            <div class="ml-8 text-base">
                <li @mouseover="flag = true" @mouseleave="flag = false" class="relative block left-0 p-0">
                    <a class="
                    focus:outline-none
                    bg-darkblue
                    inlin-flex
                    text-white text-sm
                    -mt-2
                    font-normal
                    w-full
                    p-2
                    
                  ">
                        Cose lower transfer
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                class="inline-flex ml-1 h-5 w-5 fill-current text-primary">
                                <path
                                    d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z">
                                </path>
                            </svg>
                        </span>
                    </a>
                </li>
            </div>
            <p class="inline-flex text-ashgray pl-4 transform-none">fee</p>
        </span>
      </li>

      <li class="list-none">
        <span class="inline-flex z-50 relative text-ashgray">
            <span class="bg-darkblue rounded-full text-white w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <span class="px-4 text-base text-base">993.58 GBP</span>
            <span class=""> Amount we’ll convert</span>
        </span>
      </li>
     <li class="list-none">
        <span class="inline-flex pt-2 mt-2 z-50 relative">
          <span class="bg-darkblue rounded-full text-white w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
          </span>
          <span class="px-4 text-primary hover:opacity-50 text-base">522.636</span>
            <span style="color:#18ffff"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
             </svg>
            </span>
          <span class="
              ml-6
              text-ashgray
              hover:text-primary hover:opacity-50
              text-base
            ">
              <strong class="border-dotted border-b border-primary">Guaranteed rate
              </strong>
              <span> (2hrs) </span>
          </span>
      </span>

     </li>
    
    </div>

    <div class="flex items-center -mt-2">
      <div class="">
        <label
          class="block mb-1 absolute ml-2 z-10 text-gray-600 mt-1 text-sm px-3"
          for="formGridCode_name"
          >You send</label
        >
        <input
          value="1000"
          class="
            w-full
            rounded-l
            text-gray-700
            relative
            p-6
            text-xl
            hover:border hover:border-primary
            focus:outline-none
          "
          type="text"
          id="formGridCode_name"
        />
      </div>

      <div>
        <li
          @mouseover="flag = true"
          @mouseleave="flag = false"
          class="relative block left-0 p-0"
        >
          <a
            class="
              relative
              p-6
              flex
              items-center
              focus:outline-none
              bg-darkblue
              hover:text-primary
              font-semibold
              hover:border hover:border-ashgray
            "
          >
            <CountryFlag country="eu" size="normal" class="-mt-1" />
            <span class="pl-4 mt-1 font-bold text-white"> EUR </span>
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ml-1 h-5 w-5 fill-current text-primary"
              >
                <path
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
      </div>
    </div>

    <div
      class="
        flex flex-wrap
        justify-arouns
        space-y-4
        md:space-y-0
        text-white
        my-3
      "
    >
      <div class="text-center text-base border-r-2 border-darkblue px-4">
        <p class="text-white leading-8">You could save vs banks</p>
        <strong> 43.95 GBP </strong>
      </div>

      <div class="text-center text-base pl-6">
        <p class="text-white leading-8">
          Should arrive <br />
          <strong> 40 minutes </strong>
        </p>
      </div>
    </div>

    <div class="text-center items-center lg:w-[26.25rem] lg:py-0 py-8">
      <a
        class="
          bg-btnsucess
          p-3.5
          rounded-sm
          border-btnsucess
          text-white
          font-bold
          block
        "
        href="/register?redirectUrl=%2Fsend%23%3Famount%3D1000%26sourceCurrency%3DGBP%26targetCurrency%3DNGN%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&amp;country=NG"
        target="_top"
      >
        Get started</a
      >
    </div>
  </form>
</template>

<script>
// import CountryList from './CountryList.vue'
import CountryFlag from "vue-country-flag";

export default {
  components: { CountryFlag },
  name: "RateExchangeForm",

  data() {
    return {
      flag: false,
    };
  },
};
</script>


<style scoped>
  .sequence.tw-calculator-breakdown--inverse>li:after {
    background-color: #253655;
    border-color: #253655;
}
  .sequence.tw-calculator-breakdown>li:after {
      background-color: #e2e6e8;
      left: -33px;
  }
  .sequence>li:after {
      border-width: 0;
  }
  .sequence-inverse>li:after {
      background-color: #253655;
  }
  li{

    list-style: none;
  }
.sequence>li:after {
   content: "";
    position: absolute;
    width: 2px;
    height: 45%;
    border: 0 solid;
    border-color: inherit;
    outline: 0;
    background-color: #d3d5d8;
    background-size: 200% 200%;
    background-position: 0 0;
    left: 0.74rem;
    top: 5rem;
    background-color: #253655;
    border-color: #253655;
}

.tw-calculator-breakdown-rate-graph-icon #el_xnVmcmD2Ct {
    fill: #23ca8f;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    opacity: 0;
    -webkit-animation-name: kf_el_xnVmcmD2Ct_an_jIjGN5_d1;
    animation-name: kf_el_xnVmcmD2Ct_an_jIjGN5_d1;
    -webkit-animation-timing-function: cubic-bezier(.42,0,.58,1);
    animation-timing-function: cubic-bezier(.42,0,.58,1);
}
</style>