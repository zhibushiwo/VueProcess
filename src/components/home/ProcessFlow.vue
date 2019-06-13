<template>
  <div>
    <div id="flowwrap">
      <ul id="flow" :style="{width:width+'px'}">
        <template v-for="(item,index) in list">
          <li :class="liClass(item.id)">
            <div>
              <span>{{item.id}}</span>
            </div>
            <div>{{item.name}}</div>
          </li>
          <li class="arrow" v-if="index<list.length-1">
            <span style="padding-left:8px">
              <i class="move ar-animated ar-delay-4s iconfont icon-arrow-right"></i>
              <i class="move ar-animated ar-delay-3s iconfont icon-arrow-right"></i>
              <i class="move ar-animated ar-delay-2s iconfont icon-arrow-right"></i>
              <i class="move ar-animated ar-delay-1s iconfont icon-arrow-right"></i>
              <i class="move ar-animated iconfont icon-arrow-right"></i>
            </span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProcessFlow",
  data() {
    return {
      list: [
        {
          name: "第一道工序",
          id: 10
        },
        {
          name: "第二道工序",
          id: 20
        },
        {
          name: "第三道工序",
          id: 30
        },
        {
          name: "第四道工序",
          id: 40
        },
        {
          name: "第五道工序",
          id: 50
        },
        {
          name: "第六道工序",
          id: 60
        },
        {
          name: "第七道工序",
          id: 70
        },
        {
          name: "第八道工序",
          id: 80
        },
        {
          name: "第九道工序",
          id: 90
        },
        {
          name: "第十道工序",
          id: 100
        }
      ]
    };
  },
  computed: {
    width() {
      return this.list.length * 160;
    }
  },
  methods: {
    liClass(id) {
      console.log(id,this.$store.state.processId)
      if (this.$store.state.processId == id) {
        return "current";
      } else if (this.$store.state.processId < id) {
        return "next";
      }
    }
  },
  mounted() {
    let outDiv = document.getElementById("flowwrap");
    outDiv.onwheel = function(event) {
      event.preventDefault();
      let step = 50;
      if (event.deltaY < 0) {
        this.scrollLeft -= step;
      } else {
        this.scrollLeft += step;
      }
    };
  }
};
</script>
<style scoped>
@keyframes move {
  0% {
    left: 0%;
    opacity: 0;
  }
  70% {
    left: 70%;
    opacity: 1;
  }

  100% {
    left: 100%;
    opacity: 0;
  }
}

.move {
  -webkit-animation-name: move;
  animation-name: move;
  position: relative;
  margin-left: -13px;
}

.ar-animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  font-style: inherit;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

.ar-delay-1s {
  animation-delay: 0.1s;
}

.ar-delay-2s {
  animation-delay: 0.2s;
}

.ar-delay-3s {
  animation-delay: 0.3s;
}

.ar-delay-4s {
  animation-delay: 0.4s;
}

.ar-delay-5s {
  animation-delay: 0.5s;
}

.ar-delay-6s {
  animation-delay: 0.6s;
}

.ar-delay-7s {
  animation-delay: 0.7s;
}

.ar-delay-8s {
  animation-delay: 0.8s;
}

.ar-delay-9s {
  animation-delay: 0.9s;
}

.ar-delay-10s {
  animation-delay: 0.1s;
}

@font-face {
  font-family: "fontawesome-webfont";
  src: url("~font-awesome/fonts/fontawesome-webfont.woff") format("woff");
}
.iconfont {
  font-family: "fontawesome-webfont" !important;
  font-size: 17px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-right:before {
  content: "\f105";
}
#flow {
  width: 2580px;
  clear: both;
  overflow: hidden;
  width: 80%;
  padding: 5px;
}

#flow li {
  float: left;
  width: 110px;
  height: 88px;
  background-color: lightblue;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  text-align: center;
  padding-top: 7px;
}

#flow li.current {
  background-color: #1e9fff;
}

#flow li.next {
  background-color: aliceblue;
}

#flow li.error {
  background-color: #ff5722;
}

#flow li.arrow {
  width: 0px;
  background: #fff;
  line-height: 70px;
}

#flow li.error div:first-child span {
  background-color: gold;
  color: #000;
}

#flow li.error div:last-child {
  color: #000;
}

#flow li div:first-child span {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  line-height: 60px;
  display: inline-block;
  background-color: chartreuse;
  font-size: 21px;
}

#flow li.next div:first-child span {
  background: wheat;
  color: #000;
}

#flow li.current div:first-child span {
  background: seashell;
  color: darkolivegreen;
}

#flow li div:last-child {
  line-height: 30px;
  color: darkblue;
}

#flow li.current div:last-child {
  color: white;
}
#flowwrap {
  width: 100;
  overflow: auto;
}
#flowwrap::-webkit-scrollbar-track-piece {
  width: 10px;
  background-color: #4e4e5a;
}

#flowwrap::-webkit-scrollbar {
  width: 10px;
  height: 4px;
}

#flowwrap::-webkit-scrollbar-thumb {
  height: 50px;
  background: #3fb560;
  cursor: pointer;
}

#flowwrap::-webkit-scrollbar-thumb:hover {
  background: #3fb560;
  cursor: pointer;
}
</style>
