<template>
  <div class="tabs">
    <slot name="tabs"></slot>
  </div>


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
}
</script>

<style lang="scss" scoped>
 .tabs {
    display: flex;
    height: 60px;
 }
</style>

