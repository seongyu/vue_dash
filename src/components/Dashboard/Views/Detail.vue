<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <card-list :title="table.title" :sub-title="table.subTitle" :data="table.tabledata" :fulldata="table.fulldata" :columns="table.columns"></card-list>
        </div>
      </div>
    </div>
</template>
<script>
  import CardList from 'components/UIComponents/CardList.vue'
  import Language from 'src/localize.js'
  import API from 'src/api/api.js'

  const listColumns = Language('detail_list', 'columns')

  export default {
    components: {
      CardList
    },
    data () {
      return {
        table: {
          title: Language('detail_list', 'table_title'),
          subTitle: Language('detail_list', 'table_subtitle'),
          columns: [...listColumns],
          tabledata: [],
          fulldata: []
        }
      }
    },
    mounted: function () {
      var idx = this.$route.query.idx
      if (!idx) {
        window.history.back()
      }

      var moment = this.moment
      API.get_device_list()
      .then((result) => {
        if (result.status !== 200) {
          return null
        }
        var items = []
        for (var i in result.data) {
          var rtn = result.data[i]
          rtn.msg = JSON.parse(rtn.msg)
          var item = {
            id: parseInt(i) + 1,
            name: rtn.sdid,
            location: rtn.msg.lati + '/' + rtn.msg.long,
            target: rtn.rcid,
            last_udt: moment(rtn.tms).format('YYYY-MM-DD HH:mm:ss')
          }

          items.push(item)
        }
        this.table.tabledata = items
        this.table.fulldata = result.data
      })
    }
  }
</script>
<style>

</style>
