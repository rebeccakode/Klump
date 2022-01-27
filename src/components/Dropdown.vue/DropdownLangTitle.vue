<template>
  <div>
    <li class="p-8">
        <span class="text-4xl">
          Hello world
        </span>
    </li>
   <hr>

  <div class="bg-gray-200">
   <ul class="p-8 grid grid-cols-2 grid-rows-8 gap-4">
      <li>
      <button type="button" class=""> <strong class="">Deutsch</strong> </button>
      </li>

    <li>
        <button>
          <strong class="text-primary inline-flex">English (UK)</strong><span
          class="inline-flex text-primary pull-xs-right pull-md-none"
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
      <button type="button">
        <strong class="flex items-center">English (US)</strong>
      </button></li>
    <li>
      <button type="button"
        class="flex items-center">
        <strong class="">Español</strong>
      </button>
    </li>
    <li>
      <button type="button"
        class="flex items-center">
        <strong class="">Français</strong>
      </button>
    </li>
    <li>
      <button type="button" class="flex items-center"
      ><strong class="">Italiano</strong>
      </button>
    </li>
    <li>
      <button type="button" class="flex items-center">
        <strong class="">Bahasa Indonesia</strong>
      </button>
    </li>
    <li>
      <button type="button" class="flex items-center">
        <strong class="">Magyar</strong>
      </button>
    </li>
    <li>
      <button type="button"
        class="flex items-center">
        <strong class="">Polski</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">Português</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">Română</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">Türkçe</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">Русский</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">日本語</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">繁體中文 (香港)</strong>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="flex items-center"
      >
        <strong class="">Українська</strong>
      </button>
    </li>
  </ul>
  </div>
  </div>
</template>

<script>
export default {
  name:'DropdownLangTitle',
  data() {
  },
}
</script>

<style scoped>
  .bg-gray-200{
    border: 0 solid #e2e6e8;
    border-radius: 3px;
    box-shadow: 0 20px 66px 0 rgb(34 48 73 / 20%)
  }
</style>