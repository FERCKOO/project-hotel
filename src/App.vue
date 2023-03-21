<template>
  <div id="app">
    <NavigationVue></NavigationVue>

        <div class="page">
            <!-- <router-view></router-view> -->
          <customer-page></customer-page>
        </div>
  </div>
</template>

<script>
import NavigationVue from './components/TheNavigation.vue'
import CustomerPage from './views/CustomerPage.vue';

export default {
  name: 'App',
  components: {
        NavigationVue,
        CustomerPage,
    }
}
</script>