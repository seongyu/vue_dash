import axios from 'axios'

axios.defaults.headers.common['Access-Control-Expose-Headers'] = 'Access-Control-*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
axios.defaults.headers.common['Allow'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const API = {
  q: null,
  api_url: 'http://13.124.143.112:3000/api/v1/',
  promise: function (fn) {
    return new Promise(fn)
  },
  testFn: function () {
    // this.promise(function (res, rej) {
    //   axios.get('http://13.124.143.112:3000/api/v1/DEVICE_T')
    //   .then((result) => {
    //     console.log(result)
    //     res(result)
    //   })
    // })
    console.log('testFunction set')
  },
  get_device_list: function () {
    return this.get(this.api_url + 'DEVICE_T')
  },
  get_device_status: function (devId) {
    return this.get(this.api_url + 'DEVICE_STATUS_T?device_id=' + devId + '&sort=-timestamp&limit=1')
  },
  get_sensors_status: function (devId, sensorType) {
    return this.get(this.api_url + 'SENSOR_T?device_id=' + devId + '&sensor_type=' + sensorType + '&sort=-timestamp&limit=1')
  },
  get: function (url) {
    this.q = function (s, j) {
      axios.get(url)
      .then((res) => {
        return res
      })
      .catch((err) => {
        var error = {
          status: 700
        }
        error.message = err.message
        return error
      })
      .then((res) => {
        s(res)
      })
    }

    return this.promise(this.q)
  },
  post: function (url, data) {
    this.q = function (s, j) {
      axios.post(url, data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        var error = {
          status: 700
        }
        error.message = err.message
        return error
      })
      .then((res) => {
        s(res)
      })
    }
  }
}
// axios.get('http://localhost:5000')
// .then((res) => {
//   console.log(res)
// })
export default API
