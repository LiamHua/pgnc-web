<template>
  <div class="user-init">
    <transition appear appear-active-class="animate__bounceInDown" enter-active-class="animate__fadeInLeft" leave-active-class="animate__fadeOutRight" mode="out-in">
      <Login class="animate__animated" v-if="!showRegister"></Login>
      <Register class="animate__animated" v-if="showRegister"></Register>
    </transition>
  </div>
</template>

<script>
import Login from './login'
const Register = () => import('./register')

export default {
  components: {
    Login,
    Register
  },
  computed: {
    showRegister () {
      return this.$store.state.showRegister
    }
  }
}
</script>

<style lang="scss" scoped>
.user-init {
  height: 100vh;
  overflow: hidden;
  background: no-repeat url('http://cdn.pgnc.huazai.fun/Swiss-winter.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register {
  margin-top: -150px;
}
</style>
