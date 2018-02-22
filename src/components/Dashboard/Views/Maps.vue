<template>
    <div class="card card-map">
      <div class="header">
        <h4 class="title" id="mapname"></h4>
      </div>
      <div class="map">
        <div id="map"></div>
      </div>
    </div>
</template>
<script>
  // for socket connection

  // import Vue from 'vue'
  // import VueWebsocket from 'vue-websocket'
  // Vue.use(VueWebsocket, 'ws://localhost:30000/')

  import Language from 'src/localize.js'
  // import API from 'src/api/api.js'
  // var language = Language()
  var mapOptions = {
    zoom: 18,
    scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
    styles: [{
      'featureType': 'water',
      'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }]
    }, {
      'featureType': 'road',
      'elementType': 'geometry.fill',
      'stylers': [{ 'hue': '#ff0000' }, { 'saturation': -100 }, { 'lightness': 99 }]
    }, {
      'featureType': 'road',
      'elementType': 'geometry.stroke',
      'stylers': [{ 'color': '#808080' }, { 'lightness': 54 }]
    }, {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry.fill',
      'stylers': [{ 'color': '#ece2d9' }]
    }, {
      'featureType': 'poi.park',
      'elementType': 'geometry.fill',
      'stylers': [{ 'color': '#ccdca1' }]
    }, {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [{ 'color': '#767676' }]
    }, {
      'featureType': 'road',
      'elementType': 'labels.text.stroke',
      'stylers': [{ 'color': '#ffffff' }]
    }, { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] }, {
      'featureType': 'landscape.natural',
      'elementType': 'geometry.fill',
      'stylers': [{ 'visibility': 'on' }, { 'color': '#b8cb93' }]
    }, { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] }, {
      'featureType': 'poi.sports_complex',
      'stylers': [{ 'visibility': 'on' }]
    }, { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] }, {
      'featureType': 'poi.business',
      'stylers': [{ 'visibility': 'simplified' }]
    }]
  }

  export default {
    mounted () {
      var map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

      var marker = null
      var myLatlng = null
      var loc = null

      var id = this.$route.query.id ? this.$route.query.id : null
      if (id) {
        loc = sessionStorage.getItem(id)
        loc = JSON.parse(loc)
        myLatlng = new window.google.maps.LatLng(loc.lat, loc.lon)
        marker = new window.google.maps.Marker({
          position: myLatlng,
          title: id,
          animation: window.google.maps.Animation.BOUNCE
        })

        marker.setMap(map)

        map.setCenter(myLatlng)

        document.getElementById('mapname').innerHTML = Language('maps', 'mapnameB') + id
      } else {
        for (var i = 0; i < sessionStorage.length; i++) {
          id = sessionStorage.key(i)
          if (id !== 'language' && id !== 'bg') {
            var item = sessionStorage.getItem(id)
            loc = JSON.parse(item)
            if (loc.lat && loc.lon) {
              myLatlng = new window.google.maps.LatLng(loc.lat, loc.lon)

              marker = new window.google.maps.Marker({
                position: myLatlng,
                title: id,
                animation: window.google.maps.Animation.BOUNCE
              })

              marker.setMap(map)
              map.setCenter(myLatlng)
            }
          }
        }
        map.setZoom(12)
        document.getElementById('mapname').innerHTML = Language('maps', 'mapnameA')
      }

      // var newloc = function (lati, long) {
      //   if (lati && long) {
      //     var myLatlng = new window.google.maps.LatLng(lati, long)
      //     marker.setPosition(myLatlng)
      //     marker.setAnimation(window.google.maps.Animation.BOUNCE)
      //     // marker.setLabel('G')

      //     // marker.setMap(map)
      //     map.setCenter(myLatlng)
      //   }
      // }

      // ws.onmessage = function (msg) {
      //   var item = JSON.parse(msg.data)
      //   newloc(item.msg.lati, item.msg.long)
      // }
      // navigator.geolocation.getCurrentPosition(newloc)
    },
    watch: {
      $route: function (newR, oldR, next) {
        console.log(next)
        location.reload()
      }
    }
  }

</script>
<style>

</style>
