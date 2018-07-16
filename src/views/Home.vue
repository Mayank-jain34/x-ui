<template>
  <div class="home">
    <h1>Colors</h1>
    <div class="colors">
      <div class="color" :class="'x-bg-'+ color" v-for="color in colors" :key="color">
        {{color}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Colors } from '../util/constants';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  colors: any = Colors;
}
</script>
<style lang="scss" scoped>
.colors {
  display: flex;
}
.color {
    height: 100px;
    width: 150px;
    margin: 5px;
    text-align: center;
    color: white;
    line-height: 100px;
    font-size: 24px;
    text-transform: capitalize;
}
</style>

