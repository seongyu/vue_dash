<template>
	<div class="modal-mask">
      <div class="modal-wrapper">
        <div :class="customCnt">

          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<style>
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    }

    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      overflow-y: hidden;
    }

    .modal-container {
      width: 60%;
      margin: 0px auto;
      padding: 1%;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
    }

    .modal-container_flow {
      width: 80%;
      margin: 0px auto;
      padding: 1%;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
    }

    @media (max-width: 991px){
      .modal-container {
      width:90%;
      }
    }

    .modal-header h3 {
      margin-top: 0;
      color: #42b983;
    }

    .modal-body {
      margin: 0 !important;
      padding:0 !important;
    }

    .modal-default-button {
      float: right;
    }
</style>
<script>
  export default{
    props: {
      text: String
    },
    data () {
      return {
        customCnt: 'modal-container'
      }
    },
    mounted () {
      if (this.text) this.customCnt = 'modal-container_' + this.text
    }
  }
</script>
