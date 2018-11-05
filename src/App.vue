<template>
  <div id="app">
      <transition name="fade">
          <Modal v-body-scroll-lock="modalIsOpen"
                 v-show="modalIsOpen"
                 :modal-is-open="modalIsOpen"
                 @closeModal="closeModal" />
      </transition>

      <transition name="fade" mode="out-in">
          <div v-if="!modalIsOpen">
              <h1>This is a very long page, try scrolling.</h1>
              <button @click="openModal">Open modal</button>
          </div>
          <h1 v-else>The modal is open, try scrolling again.</h1>
      </transition>
  </div>
</template>

<script>
import Modal from './components/Modal';

export default {
    name: 'app',
    components: {
      Modal,
    },
    data() {
        return {
            modalIsOpen: false,
        }
    },
    methods: {
      openModal() {
          this.modalIsOpen = true;
      },
      closeModal() {
          console.log('close');
          this.modalIsOpen = false;
      }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 2000px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
