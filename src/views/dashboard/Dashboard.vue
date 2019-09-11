<template>
  <div class="dashboard">
    <Header />
    <div class="dashboard__content"></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'dashboard',
  components: {
    Header
  }
};
</script>

<style lang="scss">
.dashboard {
  min-height: 100%;
  background-color: $ash;
  &__content {
    padding: 40px 50px 0 20px;
    min-height: 100%;
  }
}
</style>
