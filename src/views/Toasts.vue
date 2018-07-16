<template>
  <div class="home">
    <h1>Toasts</h1>
    <div class="colors">
      <x-toast :message="message" :type="color" v-for="color in colors" :key="color"></x-toast>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Colors } from '../util/constants';
import xToast from '../components/Toast/Toast.vue';

@Component({
  components: {
    xToast,
  },
})
export default class Toasts extends Vue {
  colors: any = Colors;
  message: string = 'Hey, I am your message';
}
</script>
<style lang="scss" scoped>

</style>

