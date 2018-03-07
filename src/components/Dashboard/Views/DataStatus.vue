<template>
  <div>
    <div>FlowHeader : {{is_ready}}</div>
    <table class="table">
      <thead>
        <tr>
          <th>Packet ID</th>
          <th>Timestamp</th>
          <th>Gateway ID</th>
          <th>Component ID</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas">
          <td>{{data.packet_id}}</td>
          <td>{{data.timestamp.split('T')[0]}} {{data.timestamp.split('T')[1].split('.')[0]}}</td>
          <td>{{data.trace_ticket}}</td>
          <td>{{data.component_id}}</td>
          <td>{{data.msg}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        datas: [],
        is_ready: '',
        ws: null
      }
    },
    mounted () {
      this.ws = new WebSocket('ws://35.201.132.176:9100')

      this.ws.onopen = () => {
        this.is_ready = 'Connected'
      }

      this.ws.onmessage = (msg) => {
        if (this.datas.length >= 20) {
          this.datas.pop()
        }
        this.datas.unshift(JSON.parse(msg.data))
      }

      this.ws.onclose = () => {
        this.is_ready = 'Disconnected'
      }

      this.ws.onerror = (err) => {
        this.is_ready = err
      }
    }
  }
</script>
