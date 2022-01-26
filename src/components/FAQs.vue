<template>
  <div class="py-8 lg:py-14 w-11/12 lg:w-8/12 mx-auto">
    <p class="title text-center font-semibold">Frequently asked questions</p>
    <h2 class="subtitle text-center mt-2 font-extrabold colored-dot leading-one-height">Let's answer some of your questions</h2>

    <div class="mt-8">
      <Accordion title="What is a multi-currency account and how does it work?">
        <p>You can hold, receive, send, and spend money using a Wise multi-currency account.</p>
        <p>You can hold more than 50 currencies, and convert between them at the real exchange rate whenever you need.</p>
        <p>You can get <a href="#" target="_blank">account details</a>
          for some currencies to receive money from around the world.
        </p>
        <p>You can send money from your account to a bank account whenever you like — we'll charge a
          <a href="#" target="_blank">fixed fee</a>
          when you do this, and a conversion fee when you send to a different currency.
        </p>
        <p>And, you can spend the currencies in your account around the world with the
          <a href="#" target="_blank">Wise debit card</a>.
          Find out if the Wise card is available in your country.
        </p>
        <a target="_blank" rel="noopener noreferrer" class="link-with-arrow-right flex items-center" href="#">
          Learn more about the multi-currency account in this video
          <svg class="arrow-right" width="10" height="10" viewBox="0 0 10 10" fill="#00b9ff" focusable="false">
            <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg>
        </a>
      </Accordion>

      <Accordion title="How is the Wise account different from a bank account?">
          <p>Your Wise account is an electronic money account. It’s different from a bank account because:</p>
          <ul class="ml-2 list-disc list-inside">
            <li>Your money is <a href="#" target="_blank">safeguarded</a>
              and not covered by the Financial Services Compensation Scheme (FSCS) or another protection scheme that you would get with a bank account.
            </li>
            <li>You can’t get an overdraft or loan.</li>
            <li class="blue-bold-text"><b>You won’t earn interest.</b></li>
          </ul>

        <a target="_blank" rel="noopener noreferrer" class="link-with-arrow-right flex items-center mt-5" href="#">
          Read more about the benefits of a multi-currency account
          <svg class="arrow-right" width="10" height="10" viewBox="0 0 10 10" fill="#00b9ff" focusable="false">
            <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg>
        </a>
      </Accordion>

      <Accordion title="Can I hold multiple currencies in a Wise account?">
        <p>You can <a href="#" target="_blank">add money</a>
          to your account in 19+ currencies and hold 50+ currencies.
        </p>
        <p>You can convert money between any of the currencies in your account — always with the real exchange rate. We’ll charge a low conversion fee to do this.
        </p>
        <a target="_blank" rel="noopener noreferrer" class="link-with-arrow-right flex items-center mt-5" href="#">
          Find out more about which currencies are available
          <svg class="arrow-right" width="10" height="10" viewBox="0 0 10 10" fill="#00b9ff" focusable="false">
            <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg>
        </a>
      </Accordion>

      <Accordion title="What is a multi-currency card?">
        <p>The Wise debit card lets you spend money around the world with low conversion fees and zero transaction fees. It’s currently available for multi-currency account-holder residents in the UK, US, Australia, New Zealand, Singapore, Malaysia, Japan, Switzerland and EEA.</p>
        <a target="_blank" rel="noopener noreferrer" class="link-with-arrow-right flex items-center mt-5" href="#">
          Here are some tips to help you get started
          <svg class="arrow-right" width="10" height="10" viewBox="0 0 10 10" fill="#00b9ff" focusable="false">
            <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg>
        </a>
      </Accordion>
       
      <Accordion title="What happened to the borderless account?">
        <p>The Wise multi-currency account is the same account you know and love. The only change is in the name — we used to call it the borderless account.</p>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion.vue'
export default {
  name: 'App',
  components: {
    Accordion
  }
}
</script>

<style scoped>
.faq-section .title {
  color: #5d7079;
}
.colored-dot:after {
  content: ".";
  color: #00b9ff;
}
.link-with-arrow-right {
  color: #00b9ff;
  text-decoration: none;
  font-weight: 600;
}
.arrow-right {
  transform: rotate(90deg);
  margin-left: 8px;
}
.link-with-arrow-right:hover .arrow-right {
  display: inline-block;
  color: #00a4df;
  transition: transform .25s cubic-bezier(0,.94,.62,1);
}
</style>