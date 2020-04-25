<template>
  <div class="slide-container">
    <div :style="{width: wth}" class="slide">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "Slide",
  props: ["imgSrc", "wth"]
};
</script>


<style scoped lang="scss">
.slide {
  &-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>