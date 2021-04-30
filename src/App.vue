<template>
  <div id="app">
    <div>
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
  margin-left: 10rem;
}
.cards {
  margin-left: 2.7rem;
}

#nav a.router-link-exact-active {
  color: #87ceeb;
}

/* @media only screen and (max-width: 736px) {
  .container {
    display: block;
    grid-template-columns: 1fr;
  }
} */
</style>
