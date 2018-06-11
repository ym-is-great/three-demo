<template>
  <div ref="canvas">
    <div id="info">Description</div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'TheText',
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.canvas.appendChild(this.renderer.domElement)
    },
    render () {

    }
  }
}
</script>

<style scoped>
#info {
  color: #fff;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display:block;
}
</style>