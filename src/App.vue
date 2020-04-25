<template>
  <div id="app">
    <dHeader1 logo="logo.png">
      <template v-slot:dNav>
        <dNav1 />
      </template>
      <template v-slot:mNav>
        <mNav1 />
      </template>
    </dHeader1>

    <div>
      <Slider auto="true" dur="3" hasNav="true">
        <Slide wth="100%">
          <img
            src="https://images.unsplash.com/photo-1587689857120-f708fa5f1837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
        </Slide>
        <Slide wth="100%">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
        </Slide>
        <Slide wth="30%">
          <img
            src="https://images.unsplash.com/photo-1587749151187-42cff2fb6995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
        </Slide>
        <Slide wth="100%">
          <img
            src="https://images.unsplash.com/photo-1587749151187-42cff2fb6995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
        </Slide>
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "./components/Common/Slider/Slider";
import dHeader1 from "./components/DesktopHeaders/dHeader1";
import dNav1 from "./components/DesktopNavs/dNav1";
import Slide from "./components/Common/Slider/Slide";
export default {
  name: "app",
  components: {
    dHeader1,
    dNav1,
    Slider,
    Slide
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}
</style>
