<template>
  <div id="app">
   <div class="hero__bg">
      <Header/>
      <Hero/>
   </div>

     <div class="py-8 mt-12">
     <ProductAvaliblity/>
     </div>
      <div>
        <UseCaseSection/>
      </div>
       <Security/>
       <Coverage/>
       
      <ConvertMoney/>        
      <SendMoney/>
      <section class="faq-section">
      <FAQs />
    </section>

     <Footer/>

  </div>
</template>

<script>
import ProductAvaliblity from '../components/ProductAvaliblity.vue'
import Hero from '../components/Hero.vue'
import UseCaseSection from '../components/UseCaseSection.vue'
import FAQs from '../components/FAQs.vue'
import Footer from '../layouts/partials/Footer.vue'
import Header from '../layouts/partials/Header.vue'
import SendMoney from '../components/SendMoney.vue'
import Security from '../components/Security.vue'

import ConvertMoney from '../components/ConvertMoney.vue'
import Coverage from '../components/Coverage.vue'

export default {
  name: 'App',
  components: {
    Hero,
    FAQs,
    ProductAvaliblity, 
    Footer,
    Header,
    UseCaseSection,
    SendMoney,
    ConvertMoney,
    Security,
    Coverage,
  },

   mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '../path/to/tw-elements/dist/js/index.min.js')
    document.head.appendChild(externalScript)
  }
}
</script>


<style lang="css">
  #app {
  font-family: Averta,Avenir W02,Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>