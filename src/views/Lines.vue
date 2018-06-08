<template>
  <div ref="canvas">
    
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Lines',
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      line: null
    }
  },
  mounted () {
    this.init()
    this.render()
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
      this.geometry = new THREE.Geometry()
      this.geometry.vertices.push(new THREE.Vector3( -10, 0, 0))
      this.geometry.vertices.push(new THREE.Vector3( 0, 10, 0))
      this.geometry.vertices.push(new THREE.Vector3( 10, 0, 0))
      this.material = new THREE.LineBasicMaterial({ color: 0x0000ff })
      this.line = new THREE.Line(this.geometry, this.material)
      this.scene.add(this.line)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>