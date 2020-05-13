<template>
  <div class="user-info">
   <the-header></the-header>
   <router-view></router-view>
   <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/Footer'

export default {
  components: [
    TheHeader,
    TheFooter
  ]
}
</script>

<style lang="scss" scoped>
</style>
