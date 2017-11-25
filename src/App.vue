<template>
  <div id="app2">
    <img src="./assets/logo.png" width="300">
    <h1>Hello App!</h1>
    <firstcomponent></firstcomponent>
    <ul>
        <li><router-link to="/first">Go to first page</router-link></li>
        <li><router-link to="/second">Go to second page</router-link></li>
      </ul>
    <router-view class="view"></router-view>


    <div id="app">
      <app-registration></app-registration>
      <app-registrations></app-registrations>
    </div>
  </div>
</template>

<script>
import Registration from './component/Registration.vue';
import Registrations from './component/Registrations.vue';
import firstcomponent from './component/firstcomponent.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { 
    firstcomponent, 
    appRegistration: Registration,
    appRegistrations: Registrations
  }
}


</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
