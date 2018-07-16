<template>
<span :class="'x-icon x-icon-'+ type"></span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop() type!: string;
}
</script>

<style lang="scss" scoped>

</style>

