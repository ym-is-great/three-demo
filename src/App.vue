<template>
  <div id="app">
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'app',
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      cube: null
    }
  },
  created () {
    console.log('THREE: ', THREE)
  },
  mounted () {
    this.init()
    this.renderBox()
    this.animate()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)
    },
    renderBox () {
      this.geometry = new THREE.BoxGeometry( 1, 1, 1 )
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      this.cube = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.cube)
      this.camera.position.z = 5
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.cube.rotation.x += 0.03
      this.cube.rotation.y += 0.03
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>  