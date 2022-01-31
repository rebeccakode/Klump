<template>
  <div class="bg-neutral md:py-16 py-8">
    <div class="container mx-auto">
      <div class="text-center">
        <b class="font-semibold tracking-normal text-secondary">Security</b>
        <h2 class="text-darkbluetitle lg:text-26rem  text-2xl font-bold block-title">Protecting you and your money<span class="text-primary text-6xl">.</span></h2>
        <p class="text-secondary mt-4 mb-0 text-center md:w-2/3 w-full mx-auto">Every month, our customers trust us to move
          over £<!-- --> 6<!-- --> billion of their money. Here are some of the important ways we protect them.
        </p>
      </div>
      <div class="lg:block hidden">
        <div class="grid grid-rows-6 gap-6 pt-8 grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:pt-16">
          <div v-for="item in entries" :key="item.id" class="sm:p-6 p-4 w-full bg-white border border-neutral text-left rounded-sm">
            <div class="grid gap-4 grid-cols-10 grid-rows-none md:gap-6">
              <img class="self-start md:self-center col-span-2"
                  :src="item.icon"
                  alt="" loading="lazy">
              <div class="col-span-8">
                <h3 class="h4 mt-1 text-lg">{{ item.title }}</h3>
                <p class="hidden md:block mb-0 mt-4 text-secondary">
                  <span v-html="item.description"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div class="mt-3 lg:hidden w-11/12 mx-auto" v-for="item in entries" :key="item.id"> 
       <div class="rounded-sm  hover:border-yellow border border-gray-200 cursor-pointer bg-white">
          <div v-on:click="isOpen=!isOpen">
             <div class="text-lg leading-md-height text-darkbluetitle font-semibold flex justify-between p-3 items-start">
                <img class="self-start md:self-center h-12 w-[3rem]" :src="item.icon" alt="" loading="lazy">
                <h3 class="h4 mt-3">{{ item.title }}</h3> 
                <span class="accordion-icon mt-4" :class="isOpen ? 'accordion-icon-transform-up' : 'bg-transparent'">
                  <svg width="16" height="16" fill="#00b9ff" focusable="false">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                  </svg>
                </span>
             </div>
          </div>

          <div class="px-6 pb-6 accordion-text" :class="isOpen ? 'block' : 'hidden'">
              <p class="mb-0 mt-4 text-secondary">
                <slot> </slot>
                <span v-html="item.description"></span>
              </p>
            </div>
       </div>
       </div>
      <div class="mt-8 text-center">
        Online scams are on the rise.
        <a href="#" target="_blank" class="text-primary font-semibold">Learn how to stay safe</a>
     
    </div>
    </div>
   


  </div>
</template>

<script>
export default {
  name: 'Security',
  data() {
    return {
      isOpen: false,
      isActive: null,
      entries: [
        {
          id: 1,
          title: 'Safeguarded with leading banks',
          description: '<span>We hold your money with established financial institutions, so it’s separate from our own accounts and in our normal course of business not accessible to our partners. Read more <a href="#" target="_blank">here</a>.</span>',
          icon: '/images/security-icons/safeguarded_leading_banks.svg',
        },
        {
          id: 2,
          title: 'Regulated around the world',
          description: 'We’re regulated by authorities around the world. This includes the FCA in the UK and FinCEN in the US.',
          icon: '/images/security-icons/regulated_by_fcg.svg',
        },
        {
          id: 3,
          title: 'Audited regularly',
          description: 'We make sure your money’s secure, and that Wise is financially stable. As we’re not a bank, your money isn’t FSCS protected — instead we safeguard it.',
          icon: '/images/security-icons/segragated_accounts.svg',
        },
        {
          id: 4,
          title: 'Extra-secure transactions',
          description: 'We use 2-factor authentication to protect your account and transactions. That means you — and only you — can get to your money.',
          icon: '/images/security-icons/secure_transations.svg',
        },
        {
          id: 5,
          title: 'Data protection',
          description: 'We’re committed to keeping your personal data safe, and we’re transparent in how we collect, process, and store it.',
          icon: '/images/security-icons/data_protection.svg',
        },
        {
          id: 6,
          title: 'Dedicated anti-fraud team',
          description: 'We work round the clock to keep your account and money protected from even the most sophisticated fraud.',
          icon: '/images/security-icons/dedicated_fraud_team.svg',
        },
      ]
    }
  }
}
</script>

<style>

  .accordion-text p {
    color: #5d7079;
    margin: 0 0 24px;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: .016em;
  }
  .accordion-text a {
    color: #00b9ff;
    font-weight: 600;
    letter-spacing: 0;
    text-decoration: underline;
    background-color: transparent;
  }
  .accordion-icon {
    transform: rotate(180deg);
  }
  .accordion-icon-transform-up {
    transform: none;
  }
  /* li {
    color: #5d7079;
  }
  .blue-bold-text {
    color: #37517e;
  } */
</style>
