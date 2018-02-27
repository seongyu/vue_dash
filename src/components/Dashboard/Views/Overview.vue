<template>
  <div>
    <div v-if="hasCardResult" class="row">
      <!--Custom Card-->
      <div class="col-lg-3 col-sm-6" v-for="card in customCards.data">
        <stats-card>
          <div slot="top-header">
            <div class="well custom-top-header-title">
              <i v-if="card.last_status" style="margin-right:10px;color:green" class="glyphicon glyphicon-ok"></i>
              <i v-if="!card.last_status" style="margin-right:10px;color:red" class="glyphicon glyphicon-remove"></i>
             {{card.device_id}}
           </div>
            <table class="table table-condensed custom-table" style="text-align:center">
              <tbody>
                <tr>
                  <td class="custom-left">{{language['card']['service'][location]}}</td>
                  <td>{{card.service}}</td>
                </tr>
                <tr>
                  <td class="custom-left">{{language['card']['location'][location]}}</td>
                  <td>{{card.location}}</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <button v-if="card.last_status" @click="modalOpenClick(card)" class="btn btn-block">
                      <i class="glyphicon glyphicon-search"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="custom-item-box" slot="header">
          </div>
          <div class="custom-item-box" slot="content">
          </div>
          <div class="stats" :title="language['card']['last_device_updated_ttl'][location]" slot="footer">
            <i class="ti-reload"></i> {{card.timestamp}}
          </div>
        </stats-card>
      </div>
      <!--Custom Card end-->
    </div>
    
    <!-- for sample service & list of app -->
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div slot="top-header">
            <div class="custom-card-header">DA APARTMENT<br>(SAMPLE)</div>
          </div>
          <div slot="header" class="custom-card-left">
            <button class="btn btn-info" style="margin:1em" @click="onclickDetail(0)">
              <i class="glyphicon glyphicon-object-align-bottom"></i>
            </button>
          </div>
          <div slot="content" class="custom-card-right" style="text-align:center">
            <div>동 : 5</div>
            <div>가구 : 105</div>
            <div>센서 : 105</div>
            
          </div>
          <span class="stats" slot="footer"><i class="ti-reload"></i>1일 전 업데이트</span>
        </stats-card>
      </div>
    </div>



    <!--Charts-->
    <!-- <div class="row">
      <div class="col-xs-12">
        <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
          <h4 class="title" slot="title">{{language['userChart']['title'][location]}}</h4>
          <span slot="subTitle">{{language['userChart']['subTitle'][location]}}</span>
          <span slot="footer">
            <i class="ti-reload"></i> {{language['userChart']['reload'][location]}}</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> {{language['userChart']['targets'][0][location]}}
            <i class="fa fa-circle text-danger"></i> {{language['userChart']['targets'][1][location]}}
            <i class="fa fa-circle text-warning"></i> {{language['userChart']['targets'][2][location]}}
          </div>
        </chart-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">{{language['emailStatistics']['title'][location]}}</h4>
          <span slot="subTitle">{{language['emailStatistics']['subTitle'][location]}}</span>
          <span slot="footer">
            <i class="ti-timer"></i>{{language['emailStatistics']['reload'][location]}}</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> {{language['emailStatistics']['targets'][0][location]}}
            <i class="fa fa-circle text-danger"></i> {{language['emailStatistics']['targets'][1][location]}}
            <i class="fa fa-circle text-warning"></i> {{language['emailStatistics']['targets'][2][location]}}
          </div>
        </chart-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">{{language['sales']['title'][location]}}</h4>
          <span slot="subTitle">{{language['sales']['subTitle'][location]}}</span>
          <span slot="footer">
            <i class="ti-check"></i>{{language['sales']['reload'][location]}}</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i>{{language['sales']['targets'][0][location]}}
            <i class="fa fa-circle text-warning"></i>{{language['sales']['targets'][1][location]}}
          </div>
        </chart-card>
      </div>
    </div>
    <div> -->



      
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <div slot="header"><b class="custom-top-title">{{language['cardModal']['device_id'][location]}} : {{modalItem.device_id}}</b>
          <span class="custom-top-right-info" :title="language['cardModal']['last_status_updated_ttl'][location]" >{{language['cardModal']['last_status_updated'][location]}} : {{modalItem.last_status}}</span></div>
        <table class="custom-modal table" slot="body" style="padding:0;margin:0">
              <tr>
                <td class="custom-title custom-left">{{language['cardModal']['name'][location]}}</td>
                <td>
                  {{modalItem.service}}
                </td>
                <td class="custom-title custom-left">{{language['cardModal']['location'][location]}}</td>
                <td>
                  {{modalItem.location}}
                </td>
              </tr>
              <tr>
                <td class="custom-title custom-left">{{language['cardModal']['cpu_spec'][location]}}</td>
                <td>
                  {{modalItem.cpu_info}}
                </td>
                <td class="custom-title custom-left">{{language['cardModal']['cpu_usage'][location]}}</td>
                <td>
                  {{modalItem.cpu_usage}}/{{modalItem.cpu}}
                </td>
              </tr>
              <tr>
                <td class="custom-title custom-left">{{language['cardModal']['memory_usage'][location]}}</td>
                <td>
                  {{modalItem.memory_usage}}/{{modalItem.memory}}
                </td>
                <td class="custom-title custom-left">{{language['cardModal']['disk_usage'][location]}}</td>
                <td>
                  {{modalItem.disk_usage}}/{{modalItem.disk}}
                </td>
              </tr>
              <tr>
                <td class="custom-title custom-left">{{language['cardModal']['ip'][location]}}</td>
                <td>
                  {{modalItem.ip}}
                </td>
                <td class="custom-title custom-left">{{language['cardModal']['boot_time'][location]}}</td>
                <td>
                  {{modalItem.boot}}
                </td>
              </tr>
              <tr v-if="modalItem.sensors.length > 0">
                <td colspan="4">

                  <table class="custom-inner-table">
                    <thead><tr><th colspan="4">{{language['cardModal']['sensor_information'][location]}}</th></tr></thead>
                    <tbody>
                      <tr>
                        <th>{{language['cardModal']['type'][location]}}</th>
                        <th>{{language['cardModal']['sensing_stat'][location]}}</th>
                        <th>{{language['cardModal']['update_sensor_stat'][location]}}</th>
                        <th>{{language['cardModal']['last_sensor_update'][location]}}</th>
                      </tr>
                      <tr v-for="sensor in modalItem.sensors">
                        <td>{{sensor.sensor_type}}</td>
                        <td>{{sensor.sensor_status==0? 'Normal':sensor.sensor_status==1? 'Temporary Fault':sensor.sensor_status==2? 'Fault':'Off'}}</td>
                        <td>{{sensor.update_status==0? 'Normal':sensor.update_status==1? 'Temporary Fault':sensor.update_status==2? 'Fault':'Off'}}</td>
                        <td>{{sensor.timestamp}}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
          </table>
        <div slot="footer">
          <button class="btn btn-block btn-info modal-default-button" @click="modalCloseClick">
              {{language['cardModal']['close_btn'][location]}}
            </button>
        </div>
      </modal>
    </div>
  </div>

</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import Modal from 'components/UIComponents/Modal.vue'
  import Language from 'src/localize.js'
  // import API from 'src/api/api.js'
  var location = Language()
  export default {
    components: {
      StatsCard,
      ChartCard,
      Modal
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    computed: {
      hasCardResult: function () {
        return this.customCards.data.length > 0
      }
    },
    mounted: function () {
      return null
      // var moment = this.moment
      // API.get_device_list()
      // .then((rtn) => {
      //   if (rtn.status !== 200) {
      //     return null
      //   }
      //   var promiseSet = []
      //   for (var i in rtn.data) {
      //     var q = new Promise(function (resolve, reject) {
      //       var dt = rtn.data[i]
      //       var newData = {
      //         device_id: dt.device_id,
      //         ip: dt.ip,
      //         os: dt.os,
      //         service: dt.service,
      //         location: dt.is_sub_system,
      //         sensors: dt.sensors,
      //         timestamp: moment(dt.timestamp).format('YYYY-MM-DD HH:mm:ss')
      //       }
      //       API.get_device_status(dt.device_id)
      //       .then((rtn) => {
      //         if (rtn.status !== 200 || rtn.data.length <= 0) {
      //           resolve(newData)
      //           return null
      //         }
      //         var data = rtn.data[0]
      //         newData.cpu = data.cpu
      //         newData.cpu_info = data.cpu_info
      //         newData.cpu_usage = data.cpu_usage
      //         newData.memory = data.memory
      //         newData.memory_usage = data.memory_usage
      //         newData.disk = data.disk
      //         newData.disk_usage = data.disk_usage
      //         newData.boot = data.boot
      //         newData.last_status = moment(data.timestamp).format('YYYY-MM-DD HH:mm:ss')
      //         resolve(newData)
      //       })
      //     })
      //     promiseSet.push(q)
      //   }
      //   Promise.all(promiseSet)
      //   .then((rtn) => {
      //     this.customCards.data = rtn
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // })
    },
    methods: {
      onclickDetail (idx) {
        window.location.href = '#/admin/detail?idx=' + idx
      },
      modalOpenClick (target) {
        // var moment = this.moment
        // var sensors = []
        // if (target.sensors.length <= 0) {
        //   document.body.setAttribute('style', 'overflow-y:hidden')
        //   window.scrollTo(0, 0)
        //   this.showModal = true
        //   return null
        // }
        // var promiseSet = []
        // for (var i in target.sensors) {
        //   var promise = new Promise(function (resolve, reject) {
        //     API.get_sensors_status(target.device_id, target.sensors[i].type)
        //     .then((rtn) => {
        //       resolve(rtn.data[0])
        //     })
        //     .catch((err) => {
        //       reject(err)
        //     })
        //   })
        //   promiseSet.push(promise)
        // }
        // Promise.all(promiseSet)
        // .then((rtn) => {
        //   for (var i in rtn) {
        //     rtn[i].timestamp = moment(rtn[i].timestamp).format('YYYY-MM-DD HH:mm:ss')
        //   }
        //   sensors = rtn
        // })
        // .catch((err) => {
        //   console.log(err)
        // })
        // .then(() => {
        //   this.modalItem = {
        //     device_id: target.device_id,
        //     service: target.service,
        //     location: target.location,
        //     ip: target.ip,
        //     cpu: target.cpu,
        //     cpu_info: target.cpu_info,
        //     cpu_usage: target.cpu_usage,
        //     memory: target.memory,
        //     memory_usage: target.memory_usage,
        //     disk: target.disk,
        //     disk_usage: target.disk_usage,
        //     sensors: sensors,
        //     boot: target.boot,
        //     last_status: target.last_status
        //   }
        //   document.body.setAttribute('style', 'overflow-y:hidden')
        //   window.scrollTo(0, 0)
        //   this.showModal = true
        // })
      },
      modalCloseClick () {
        document.body.setAttribute('style', 'overflow-y:scroll')
        this.showModal = false
      }
    },
    data () {
      return {
        customCards: {
          data: []
        },
        showModal: false,
        modalItem: {
          device_id: '',
          service: '',
          is_sub_system: '',
          ip: '',
          cpu: 0,
          cpu_info: '',
          cpu_usage: 0,
          memory: 0,
          memory_usage: 0,
          disk: 0,
          disk_usage: 0,
          boot: '',
          timestamp: ''
        },
        location: location,
        language: Language(null, null, 'overview'),
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }
      }
    }
  }
</script>
<style>
</style>
