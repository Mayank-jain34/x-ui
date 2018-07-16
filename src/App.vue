<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/icons">Icons</router-link> |
      <router-link to="/buttons">Buttons</router-link> |
      <router-link to="/toasts">Toasts</router-link> |
      <router-link to="/accordions">Accordions</router-link> |
      <router-link to="/cards">Cards</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
 @import "styles/x.scss";
 #app {
  margin: auto;
  height: 100%;
  width: 80%;
 }
 #nav {
   a {
     color: tomato;
    text-decoration: none;
   }
 }
</style>
