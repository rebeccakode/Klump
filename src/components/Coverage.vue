<template>
  <div class="lg:px-32 py-12 lg:px-16 px-6">
    <p class="section-title">Coverage</p>

    <h2 class="dark-blue-title text-center mt-2 font-extrabold colored-dot leading-one-height">Get these local account details</h2>
    <p class="black-subtitle-text text-center font-medium mt-4">These are the account details you can share with others to receive money.
      Anyone can use these <br class="hidden lg:flex">to pay you just like they'd pay a local.

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">

      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='gb' size='normal' class=""/>
          <p class="coverage-single-card-currency">British pound</p>
        </div>
        <p class="coverage-single-card-text">UK sort code, Account number, and IBAN</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='eu' size='normal'/>
          <p class="coverage-single-card-currency">Euro</p>
        </div>
        <p class="coverage-single-card-text">Bank code (SWIFT/BIC) and IBAN</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='us' size='normal'/>
          <p class="coverage-single-card-currency">US dollar</p>
        </div>
        <p class="coverage-single-card-text ">Routing number and Account number</p>
      </div>

    <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='au' size='normal' class=""/>
          <p class="coverage-single-card-currency">Australian dollar</p>
        </div>
        <p class="coverage-single-card-text">BSB code and Account number</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='nz' size='normal'/>
          <p class="coverage-single-card-currency">New Zealand dollar</p>
        </div>
        <p class="coverage-single-card-text">Account number</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='sg' size='normal'/>
          <p class="coverage-single-card-currency">Singapore dollar</p>
        </div>
        <p class="coverage-single-card-text ">Bank code, Bank name, and Account number</p>
      </div>

    <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='ca' size='normal' class=""/>
          <p class="coverage-single-card-currency">Canadian dollar</p>
        </div>
        <p class="coverage-single-card-text">Institution number, Transit number, and Account number</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='hn' size='normal'/>
          <p class="coverage-single-card-currency">Hungarian forint</p>
        </div>
        <p class="coverage-single-card-text">Account number</p>
      </div>
      <div class="coverage-single-card">
        <div class="title-wrapper">
          <country-flag country='tr' size='normal'/>
          <p class="coverage-single-card-currency">Turkish lira</p>
        </div>
        <p class="coverage-single-card-text ">Bank name and IBAN</p>
      </div>

  </div>

  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: "Coverage",
  components: {
    CountryFlag
  }
}
</script>

<style scoped>
.coverage-single-card {
  border: 1px solid #e2e6e8;
  border-radius: 2px;
  color: #5d7079;
  padding: 24px;
}
.title-wrapper {
  @apply flex items-center;
}
.coverage-single-card-currency {
  color: #37517e;
  font-weight: 600;
  letter-spacing: 0;
  font-size: 1.125rem;
  margin-left: 16px;
}
.flag.normal-flag {
  margin-bottom: 1px;
}
.coverage-single-card-text {
  @apply font-medium pr-2 mt-2 pb-2;
}
</style>