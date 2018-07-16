<template>
  <div class="home">
    <h1>Accordions</h1>
    <div class="accordians">
      <div class="accordian" v-for="color in colors" :key="color">
        <x-accordion :color="color" :collapsed="false">
          <template slot="title">Some title</template>
          <template slot="body">
            The main goal of building out a backend administrative tool is to alleviate the impact of customization requests on the RMS engineering teams by creating GUI tools to manage the most common ones.  The general idea is to put up a version of RCP that only a select group of RMS team members can access.  The tool should provide all the tools of RCP, plus some additional tabs and features within the existing tabs to perform more complex operations that we don't necessarily want in the hands of clients.
          </template>
        </x-accordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Colors } from '../util/constants';
import xAccordion from '../components/Accordion/Accordion.vue';

@Component({
  components: {
    xAccordion,
  },
})
export default class Accordions extends Vue {
  colors: any = Colors;
}
</script>
<style lang="scss" scoped>
.accordians {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  .accordian {
    width: 100%;
  }
}
</style>

