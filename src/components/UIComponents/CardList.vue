<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <th v-for="column in columns">{{column}}</th>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td v-for="it in item">{{it}}</td>
            <td>
              <div class="btn-group">
                <button class="btn btn-xs btn-primary" @click="onDetail(item)">
                  {{language['detail'][location]}}
                </button>
                <button class="btn btn-xs btn-danger" @click="onMap(item)">
                  {{language['map'][location]}}
                </button>
                <button class="btn btn-xs btn-success" @click="onFlowModal(item)">
                  {{language['flow'][location]}}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <b class="custom-top-title">{{language['modal']['name'][location]}} : {{target.ogtg}}</b>
      </div>
      <table class="table" slot="body">
        <tbody>
          <tr>
            <td>{{language['modal']['location'][location]}}</td>
            <td>{{language['modal']['lati'][location]}} : {{target.msg.lati}} / 
            {{language['modal']['long'][location]}} : {{target.msg.long}}</td>
          </tr>
          <tr>
            <td>{{language['modal']['mnft'][location]}}</td>
            <td>{{target.msg.pfrm}}</td>
          </tr>
          <tr>
            <td>{{language['modal']['desc'][location]}}</td>
            <td>{{target.msg.desc}}</td>
          </tr>
          <tr>
            <td>{{language['modal']['owner'][location]}}</td>
            <td>{{target.msg.mail}}</td>
          </tr>
          <tr>
            <td>{{language['modal']['lastpacket'][location]}}</td>
            <td>{{target.pid}}</td>
          </tr>
          <tr>
            <td>{{language['modal']['lastupdated'][location]}}</td>
            <td>{{target.tms}}</td>
          </tr>
        </tbody>
      </table>
      <div slot="footer">
        <button class="btn btn-block btn-info modal-default-button" @click="modalCloseClick">
            {{language['modal']['close'][location]}}
          </button>
      </div>
    </modal>
    <modal v-if="showFlowM" @close="showFlowM = false" text="flow">
      <h4 class="title" slot="header">
        {{language['modal']['name'][location]}} : {{target.ogtg}}
      </h4>
      <div slot="body">
        <flow-chart :arr="flowArr" style="with:90%;"></flow-chart>
      </div>
      <div slot="footer">
        <div class="btn-group" style="float:left">
          <button class="btn btn-sm btn-success" @click="onFlow('day')">{{language['modal']['buttons']['day'][location]}}</button>
          <button class="btn btn-sm btn-info" @click="onFlow('week')">{{language['modal']['buttons']['week'][location]}}</button>
          <button class="btn btn-sm btn-danger" @click="onFlow('month')">{{language['modal']['buttons']['month'][location]}}</button>
        </div>
        <button class="btn btn-primary" @click="onFlowClose">{{language['modal']['close'][location]}}</button>
      </div>
    </modal>
  </div>
</template>
<script>
  import Modal from 'components/UIComponents/Modal.vue'
  import Language from 'src/localize.js'
  import FlowChart from 'components/UIComponents/FlowChart.vue'
  import API from 'src/api/api.js'

  export default {
    components: {
      Modal,
      FlowChart
    },
    props: {
      columns: Array,
      data: Array,
      fulldata: Array,
      type: {
        type: String, // striped | hover
        default: 'striped'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        location: Language(),
        language: Language(null, null, 'cardList'),
        showModal: false,
        showFlowM: false,
        target: {},
        term: 'day',
        flowArr: []
      }
    },
    computed: {
      tableClass () {
        return `table-${this.type}`
      }
    },
    methods: {
      onDetail (item) {
        this.target = this.fulldata[item.id - 1]
        this.showModal = true
      },
      onMap (item) {
        this.target = this.fulldata[item.id - 1]
        if (!this.target.msg.lati || !this.target.msg.long) {
          alert('Has no location data')
          return null
        }
        var loc = {'lat': this.target.msg.lati, 'lon': this.target.msg.long}
        sessionStorage.setItem(this.target.ogtg, JSON.stringify(loc))
        window.location.href = '#/admin/maps?id=' + this.target.ogtg
      },
      onFlow (term) {
        this.$loading(true)
        var devId = this.target.ogtg
        API.get_map_as_term(term, devId)
        .then((result) => {
          if (result.status !== 200) {
            alert('ERROR EXPOSE')
            return null
          }
          this.flowArr = result.data
          this.$loading(false)
        })
      },
      onFlowModal (item) {
        this.$loading(true)
        this.target = this.fulldata[item.id - 1]
        var devId = this.target.ogtg
        API.get_map_as_term(this.term, devId)
        .then((result) => {
          if (result.status !== 200) {
            alert('ERROR EXPOSE')
            return null
          }
          this.flowArr = result.data
          this.showFlowM = true
          this.$loading(false)
        })
      },
      onFlowClose () {
        document.body.setAttribute('style', 'overflow-y:scroll')
        this.showFlowM = false
      },
      modalCloseClick () {
        document.body.setAttribute('style', 'overflow-y:scroll')
        this.showModal = false
      }
    }
  }
</script>
<style>
</style>
