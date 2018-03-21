<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
      <ul class="nav navbar-nav">
        <!-- <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="#/admin/overview">
            <i class="ti-panel"></i>
            <p>{{$language('nav_bar','stats')}}</p>
          </a>
        </li>
        <drop-down :title="$language('nav_bar','notifications')" icon="ti-bell">
          <li v-for="(ls, i) in notiList"><a :href="'#'+ls.link">{{ls.text}} {{i}}</a></li>
        </drop-down>
        <li>
          <a href="#/admin/overview">
            <i class="ti-settings"></i>
            <p>{{$language('nav_bar','settings')}}</p>
          </a>
        </li> -->
        <!-- <li class="divider"></li> -->
      </ul>
    </side-bar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeNotifications: false,
        notiList: [
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' },
        { text: 'Notification', link: '/admin/notifications' }
        ]
      }
    }
  }
</script>

<style lang="scss"></style>
