<template>
    <select v-model="selected" class="p-6 w-1/2 border">
              <option v-for="country in countries" :value="country.value" :key="country">
                {{ country.label }}
              </option>
    </select>
</template>

<script>
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
    name: 'CountryList',
    data() {
        
    },

computed: {
    countries () {
      const list = countries.getNames('en', { select: 'official' })
      return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
    }
  },
}
</script>