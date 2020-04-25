<template>
  <div class="slider-container">
    <button id="leftButton" @click="slideLeft">Left</button>
    <div class="slider">
      <slot></slot>
    </div>
    <button id="rightButton" @click="slideRight">Right</button>
    <div id="counterCont" class="slider-counter"></div>
  </div>
</template>

<script>
import Slide from "./Slide";
export default {
  name: "Slider",
  components: {
    Slide
  },
  props: ["auto", "dur", "hasNav"],
  data() {
    var convertToSec = parseFloat(this.dur, 10) * 1000;
    return {
      currentIndex: 0,
      autoSlide: this.auto,
      duration: convertToSec
    };
  },
  watch: {
    currentIndex: function() {
      var counter = Array.from(this.$el.querySelector("#counterCont").children);
      for (var i = 0; i < counter.length; i++) {
        if (i == this.currentIndex) {
          counter[i].style.background = "black";
        } else {
          counter[i].style.background = "white";
        }
      }
      if (this.currentIndex == 0) {
        var lb = this.$el.querySelector("#leftButton");
        lb.setAttribute("disabled", "true");
      } else {
        var lb = this.$el.querySelector("#leftButton");
        lb.removeAttribute("disabled");
      }

      if (this.currentIndex == counter.length - 1) {
        var lb = this.$el.querySelector("#rightButton");
        lb.setAttribute("disabled", "true");
      } else {
        var lb = this.$el.querySelector("#rightButton");
        lb.removeAttribute("disabled");
      }
    }
  },
  mounted() {
    var self = this;
    var slider = this.$el.getElementsByClassName("slider")[0];
    var sliderElements = Array.from(slider.children);
    var newOffset = 0;
    sliderElements.forEach(element => {
      element.style.left = newOffset + "px";
      newOffset += slider.clientWidth;
    });

    if (this.currentIndex == 0) {
      var lb = this.$el.querySelector("#leftButton");
      lb.setAttribute("disabled", "true");
    }

    if (this.currentIndex == sliderElements.length - 1) {
      var rb = this.$el.querySelector("#rightButton");
      rb.setAttribute("disabled", "true");
    }

    if (this.hasNav == "true") {
      for (var i = 0; i < sliderElements.length; i++) {
        var counterCont = this.$el.querySelector("#counterCont");
        var counter = document.createElement("div");
        counter.id = i;
        counter.classList.add("counter");
        counter.addEventListener("click", function() {
          var oldIndex = self.currentIndex;
          self.currentIndex = parseInt(this.id, 10);
          self.slideAdvance(oldIndex, parseInt(this.id, 10));
        });
        counterCont.appendChild(counter);
      }
    }

    var counter = Array.from(this.$el.querySelector("#counterCont").children);
    for (var i = 0; i < counter.length; i++) {
      if (i == this.currentIndex) {
        counter[i].style.background = "black";
      } else {
        counter[i].style.background = "white";
      }
    }
    if (this.autoSlide == "true") {
      setInterval(function() {
        var oldIndex = self.currentIndex;
        if (self.currentIndex == sliderElements.length - 1) {
          self.currentIndex = 0;
        } else {
          self.currentIndex += 1;
        }

        self.slideAdvance(oldIndex, self.currentIndex);
      }, this.duration);
    }
  },
  methods: {
    slideAdvance(oldIndex, currentIndex) {
      var slider = this.$el.getElementsByClassName("slider")[0];
      var sliderElements = Array.from(slider.children);
      sliderElements.forEach(element => {
        var newOffset =
          element.offsetLeft - element.clientWidth * (currentIndex - oldIndex);
        element.style.left = newOffset + "px";
      });
    },
    slideLeft() {
      var slider = this.$el.getElementsByClassName("slider")[0];
      var sliderElements = Array.from(slider.children);

      if (this.currentIndex > 0) {
        sliderElements.forEach(element => {
          var newOffset = element.offsetLeft + element.clientWidth;
          element.style.left = newOffset + "px";
        });
        this.currentIndex -= 1;
      }
    },

    slideRight() {
      var slider = this.$el.getElementsByClassName("slider")[0];
      var sliderElements = Array.from(slider.children);

      if (this.currentIndex < sliderElements.length - 1) {
        sliderElements.forEach(element => {
          var newOffset = element.offsetLeft - element.clientWidth;
          element.style.left = newOffset + "px";
        });
        this.currentIndex += 1;
      }
    }
  }
};
</script>

<style lang="scss">
.slider {
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 1000px;

  &-container {
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &-counter {
    display: flex;
    flex-flow: row;
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
  }
}

.counter {
  width: 24px;
  height: 24px;
  background: white;
  border: 2px black solid;
  margin-right: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}
</style>