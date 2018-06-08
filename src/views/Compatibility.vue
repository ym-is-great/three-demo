<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
import Detector from 'three/examples/js/Detector'

export default {
  name: 'Compatibility',
  data () {
    return {
      msg: null
    }
  },
  created () {
    if (Detector.webgl) {
      this.msg = 'Your browser is compatible with Three.js !'
    } else {
      this.msg = Detector.getWebGLErrorMessage()
    }
  }
}
</script>

<style>
.msg {
  padding: 30px;
}
</style>