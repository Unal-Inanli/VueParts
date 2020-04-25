<template>
  <div class="Header">
    <!-- Desktop Header Start -->
    <div class="Header__desktop">
      <div class="Header__logo">
        <img :src="require('@/assets/' + logo + '')" alt />
      </div>

      <div class="Header__nav">
        <slot name="dNav"></slot>
      </div>
    </div>
    <!-- Desktop Header End -->

    <!-- Mobile Header Start -->
    <div class="Header__mobile">
      <div class="Header__mobile-logo">
        <img src alt />
      </div>

      <div class="Header__nav">
        <slot name="mNav"></slot>
      </div>
    </div>
    <!-- Mobile Header End -->
  </div>
</template>


<script>
export default {
  name: "dHeader1",
  props: ["logo"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.Header {
  width: 100%;

  &__logo {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 96px;
      object-fit: contain;
    }
  }

  &__nav {
    width: 80%;
    height: 100%;
  }

  &__desktop {
    width: 100%;
    display: flex;
    flex-flow: row;
    height: 100px;
  }
}
</style>