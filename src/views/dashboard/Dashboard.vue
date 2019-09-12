<template>
  <div class="dashboard">
    <Header />
    <div class="dashboard__content">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'dashboard',
  components: {
    Header,
    Sidebar
  }
};
</script>

<style lang="scss">
.dashboard {
  height: 100%;
  background-color: $ash;
  position: relative;
  &__content {
    padding: 40px 50px 0 30px;
    min-height: 100%;
    position: relative;
    margin-top: 50px;
    .content {
      margin-left: 310px;
      padding-top: 10px;
    }
  }
}
</style>
