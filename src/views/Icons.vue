<template>
  <div class="home">
    <h1>Icons</h1>
    <div class="icons">
      <div class="icon" v-for="icon in iconList" :key="icon">
        <x-icon :type="icon"></x-icon>
        <span class="title">{{icon}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IconList } from '../util/constants';
import xIcon from '../components/Icon/Icon.vue';

@Component({
  components: {
    xIcon,
  },
})
export default class Icons extends Vue {
  iconList: any = IconList;
  message: string = 'Hey, I am your message';
}
</script>
<style lang="scss" scoped>
  .icons {
    display: flex;
    flex-wrap: wrap;
  }
  .icon {
    height: 150px;
    width: 150px;
    border: 1px solid gray;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;

    .x-icon {
      font-size: 50px;
    }
  }
</style>

