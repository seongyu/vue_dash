<template>
  <div>
    <div>전송상태 : {{is_ready}}
      <div class="btn-group" style="float:right">
        <button @click="onStart">start</button>
        <button @click="onStop">stop</button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Device ID</th>
          <th colspan="4">Message</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas">
          <td>{{data.device_id}}</td>
          <td>{{data.msg}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Language from 'src/localize.js'

  var location = Language()
  export default {
    data () {
      return {
        datas: [],
        is_ready: '',
        ws: null,
        location: location,
        language: Language(null, null, 'overview')
      }
    },
    mounted: function () {
      this._setWebSocket()
    },
    methods: {
      onStop () {
        console.log('stop websocket streaming....')
        this.ws.close()
      },
      onStart () {
        console.log('start websocket streaming....')
        this._setWebSocket()
      },
      _setWebSocket () {
        this.ws = new WebSocket('ws://localhost:9999')

        this.ws.onopen = () => {
          this.is_ready = 'Connected'
        }

        this.ws.onmessage = (msg) => {
          if (this.datas.length >= 20) {
            this.datas.pop()
          }
          try {
            var msgstring = JSON.parse(msg.data)
            this.datas.unshift({
              device_id: msgstring.device_id,
              msg: msgstring
            })
          } catch (err) {
            console.log(err)
          }
        }

        this.ws.onclose = () => {
          this.is_ready = 'Disconnected'
        }

        this.ws.onerror = (err) => {
          this.is_ready = err
        }
      }
    }
  }
</script>
<style>

</style>
