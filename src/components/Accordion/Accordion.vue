<template>
  <div class="x-accordion">
    <div :class="'x-accordion-header x-accordion-header-'+ color">
      <x-button :color="color" type="invisible" @press="toggleCollapsed()">
          <x-icon :type="isCollapsed ? 'chevron-right' : 'chevron-down'"></x-icon>
        </x-button>
      <slot name="title" v></slot>
      </div>
    <div :class="'x-accordion-body x-accordion-body-'+ color" v-show="!isCollapsed"><slot name="body"></slot></div>
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
export default class Accordion extends Vue {
  @Prop({default: false}) collapsed!: boolean;
  @Prop() color!: string;

  isCollapsed: boolean = this.collapsed;
  @Emit('collapsed')
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    return this.isCollapsed;
  }
}
</script>

<style lang="scss" scoped>

</style>

