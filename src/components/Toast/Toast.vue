<template>
  <div class="x-toast" :class="'x-toast-' + type">
    <span>{{message}}</span>
    <x-button :color="type" type="invisible" @press="onClose">
      <x-icon type="x"></x-icon>
    </x-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import xButton from '../Button/Button.vue';
import xIcon from '../Icon/Icon.vue';
@Component({
  components: {
    xButton,
    xIcon,
  },
})
export default class Toast extends Vue {
  @Prop({default: ''}) message!: string;
  @Prop() type!: string;
  @Emit('close')
  onClose() {

  }
}
</script>

<style lang="scss" scoped>

</style>

