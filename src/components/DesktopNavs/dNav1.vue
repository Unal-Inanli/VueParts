<template>
  <ul class="navbar">
    <li
      :class="{ hasSub : item.items}"
      v-for="(item, index) in items"
      :key="index"
      class="navbar__item"
    >
      <a class="navbar__link" :href="item.linksTo">{{item.name}}</a>

      <nav class="sub-menu" v-if="item.items">
        <li v-for="(item, index) in item.items" :key="index" class="sub-menu__item">
          <a class="sub-menu__link" :href="item.linksTo">{{item.name}}</a>
        </li>
      </nav>
    </li>
  </ul>
</template>

<script>
import navConf from "../../../navConfig.config";
export default {
  name: "dNav1",
  data() {
    return {
      items: navConf.items
    };
  }
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;

  &__item {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-right: 2rem;
    position: relative;

    &:hover {
      .sub-menu {
        display: flex;
      }
    }
  }

  &__link {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: bold;
  }
}

.hasSub {
  &:after {
    content: "v";
    width: 24px;
    height: 24px;
    position: absolute;
  }
}

.sub-menu {
  flex-flow: column;
  position: absolute;
  padding-top: 1.5rem;
  min-width: 200px;

  display: none;
  z-index: 2;
  overflow: hidden;

  &:before {
    content: "";
    width: 32px;
    height: 32px;
    background: navy;
    position: absolute;
    transform: rotate(45deg);
    z-index: -1;
    top: 0.9rem;
    left: 0.5rem;
  }

  &__item {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 1rem 0rem;
    background: navy;
  }

  &__link {
    text-decoration: none;
    font-weight: bold;
    color: white;
    width: 100%;
  }
}
</style>