<template>
  <div class="index">
    <h1>Three.js Demo</h1>
    <ul>
      <router-link v-for="item in list" :to="item.path">
        <li>{{ item.label }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { label: 'Hello World', path: 'hello-world' },
        { label: 'Compatibility', path: 'compatibility' },
        { label: 'Lines', path: 'lines' },
        { label: 'BasicText', path: 'basic-text' },
        { label: 'Test', path: 'test' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  padding: 10px 30px;
  a {
    color: #333;
    text-decoration: none;
  }
}
</style>
