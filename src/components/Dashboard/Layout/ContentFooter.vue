<template>
  <footer class="footer footer-color-black">
    <div class="container-fluid">
      <div class="copyright">
        &copy; {{fullyear}} <span style="color:#FFFFFF;"> Data </span>
        <span style="color:#22A1D5;"> Alliance</span>
        &nbsp;&nbsp; IoT data driven value creators
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        fullyear: new Date().getFullYear()
      }
    }
  }

</script>
<style>
.footer-color-black {
    background-color: #212120;
    color: #DDDDDD;
}
</style>
