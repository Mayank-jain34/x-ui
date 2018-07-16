<template>
  <div class="home">
    <h1>Toasts</h1>
    <div class="colors">
      <x-card :type="color" v-for="color in colors" :key="color">
        <template slot="header">
          This is header
        </template>
        <template slot="body">
          This is body
        </template>
        <template slot="footer">
          This is footer
        </template>
      </x-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Colors } from '../util/constants';
import xCard from '../components/Card/Card.vue';

@Component({
  components: {
    xCard,
  },
})
export default class Toasts extends Vue {
  colors: any = Colors;
}
</script>
<style lang="scss" scoped>

</style>

