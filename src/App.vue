<template>
  <div>
    <nav>
      <router-link
        class="logo-link"
        to="/"
      >
        <img
          class="logo"
          alt="logo"
          src="https://graphicallyapp.ir/MainLogo.png"
        />
        <div class="product-name">میکرو-فرانت اند</div>
      </router-link>
      <router-link
        class="nav-link"
        active-class="active-nav-link"
        to="/link-1"
      >
        لینک ۱
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
};
</script>

<style scoped>

</style>