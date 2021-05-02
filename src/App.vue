<template>
  <div id="app">
    <div class="namelogo">
      <h3 class="mahya">MahyaNews</h3>
    </div>

    <div id="nav">
      <Navigation />
    </div>

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mahya {
  color: #87ceeb;
  padding: 20px;
  margin-left: 8rem;
}
.cards {
  margin-left: 2.7rem;
}

#nav a.router-link-exact-active {
  color: #87ceeb;
}
@media screen and (max-width: 600px) {
  .namelogo {
    width: 50%;
  }
  .mahya {
    display: flex;
    justify-content: center;
  }
  #nav a.router-link-exact-active {
    color: #ffffff;
  }
}
</style>
