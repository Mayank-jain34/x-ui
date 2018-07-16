<template>
  <div>
    <h1>Buttons</h1>
    <div class="buttons">
        <x-button :color="color" v-for="color in colors" :key="color">{{color}}</x-button>
    </div>
    <div class="buttons">
        <x-button :color="color" type="outline" v-for="color in colors" :key="color">{{color}}</x-button>
    </div>
    <div class="buttons">
        <x-button :color="color" type="invisible" v-for="color in colors" :key="color">{{color}}</x-button>
    </div>
    <div class="buttons">
        <x-button :color="color" disabled="true" v-for="color in colors" :key="color">{{color}}</x-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Colors } from '../util/constants';
import xButton from '../components/Button/Button.vue';

@Component({
  components: {
    xButton,
  },
})
export default class Home extends Vue {
  colors: any = Colors;
}
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
}
</style>

