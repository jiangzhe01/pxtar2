<template>
  <div id="app">
    <pxtar-header></pxtar-header>
    <router-view/>
    <pxtar-footer></pxtar-footer>
  </div>
</template>

<script>
import pxtarHeader from '@/components/component/pxtarHeader'
import pxtarFooter from '@/components/component/pxtarFooter'

export default {
  name: 'App',
  components: {
    pxtarHeader,
    pxtarFooter
  }
}
</script>

<style>
</style>
