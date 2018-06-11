<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'TheTest',
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null
    }
  },
  mounted () {
    this.init()
    this.render()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.canvas.appendChild(this.renderer.domElement)
    },
    render () {
      const geometry = new THREE.CylinderGeometry(5, 5, 20, 64)
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
      const cylinder = new THREE.Mesh(geometry, material)
      this.scene.add(cylinder)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>