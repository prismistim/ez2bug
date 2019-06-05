<template lang="pug">
  .container
    .h2 Report Detail
    .report-detail(v-if="item" key="report")
      .detail-summary {{ item.summary }}
      .detail-username {{ item.username }}
      .detail-tag {{ item.category }}
      .detail-date {{ item.report_date }}
      .detail-description {{ item.description }}
    .loading(v-else key="loading") Loading Infomation...
</template>

<script>
  import load from '../api/load.js'

  export default {
    props: {
      id : Number
    },
    data() {
      return {
        item: null
      }
    },
    watch: {
      id: {
        handler() {
          load.asyncFind(this.id, item => {
            this.item = item
          })
        },
        immediate: true
        }
      }
    }
</script>
