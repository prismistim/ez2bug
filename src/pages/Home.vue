<template lang="pug">
  .container
    h2.content-title Report List
    p.info-text(v-if="loading") Loading Reports...
    ul.report-lists(v-else)
      li.list-group-item.list-group-item-action(v-for="{ date, category, summary, description, username, version } in report_data" :key="id")
        .report-date {{ date }} 
        h4.report-title 
          .badge.badge-primary.report_tag ver. {{ version }}
          | {{ summary }}
        small.report_category category : {{ category }}
        p.report-description {{ description }}
        small.report-user reported by {{ username }}
</template>

<script>
import axios from 'axios'

const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=Z_l42m_AK0pKkte4rtOi_zulHp-8rwsCxVCsKe8o9uHAkFzy2cV7HnaEJCyu1_ket_9mw4x-vGO9TwerEKZdmKj2e0O-55QVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKTlU8o-ISOnRed2z6KYd9msUiuys_VwEeIRM3fq-82JaIcPYiYgA4sYZpTak_o22Q&lib=MCBe-Y-Uo9wGPJSIi4--OZQa_c_o8YQ-H'

export default {
  name: 'index',
  data() {
    return {
      report_data: [],
      loading: true
    }
  },
  created() {
    axios.get(URL)
      .then((res) => {
        this.report_data = res.data
        this.$emit('COMPLETE')
      })
    this.$on('COMPLETE', () => {
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
  .badge{
    margin: 5px;
  }

  h2.content-title{
    margin: 10px 0; 
  }
</style>
