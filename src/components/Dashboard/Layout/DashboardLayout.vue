<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
    <div id="loading" class="loading-layout">
      <img src="static/img/loader.png" class="custom-loader"/>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    data () {
      return {
        lang: 'eng'
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
