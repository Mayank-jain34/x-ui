<template>
<div class="x-card"> 
  <div class="x-card-header">
    <slot name="header"></slot>
  </div>
  <div class="x-card-body">
    <slot name="body"></slot>
  </div>
  <div class="x-card-footer">
    <slot name="footer"></slot>
  </div>


</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
}
</script>
<style lang="scss" scoped>
.x-card {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 5px;
  .x-card-body {
    border-width: 1px 0px;
    border-style: solid;
  }
}

</style>