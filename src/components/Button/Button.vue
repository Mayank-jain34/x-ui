<template>
  <button 
    class="x-btn"
    @click="onPress"
    :disabled="disable"
    :class="cssClassList"
    >
      <slot></slot>
    </button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({default: ''}) size!: string;
  @Prop({default: ''}) type!: string;
  @Prop({default: ''}) color!: string;
  @Prop({default: false}) disable!: boolean;

  @Emit('press')
  onPress() {
  }

  get cssClassList() {
    let classList = '';
    if (this.type === 'outline') {
      classList += 'x-btn-outline-' + this.color;
    } else if (this.type === 'invisible') {
      classList += 'x-btn-invisible-' + this.color;
    } else {
      classList += 'x-btn-' + this.color;
    }
    return classList;
  }
}
</script>
