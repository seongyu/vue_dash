<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12">
          <slot name="top-header"></slot>
        </div>
        <div class="col-xs-6">
          <slot name="header"></slot>
        </div>
        <div class="col-xs-6">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="footer">
        <hr/>
        <slot name="footer"></slot>
      </div>
    </div>
  
  </div>
</template>
<script>
  export default {
    name: 'stats-card'
  }

</script>
<style>
  
</style>
