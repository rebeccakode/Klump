<template>
  <div class="rounded-sm mt-2 accordion-border border border-gray-200 cursor-pointer bg-white">
    <div v-on:click="isOpen = !isOpen" class="text-base leading-md-height text-darkbluetitle font-semibold flex justify-between p-6 items-start">
       {{ icon }} {{ title }} 
      <span class="accordion-icon" :class="isOpen ? 'accordion-icon-transform-up' : 'bg-transparent'">
        <svg width="16" height="16" fill="#00b9ff" focusable="false">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
        </svg>
      </span>
    </div>
    <div class="px-6 pb-6 accordion-text" :class="isOpen ? 'block' : 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
      isActive: null,
    }
  },
  name: 'Accordion',
  props: {
    title: String,
    icon:String,
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
