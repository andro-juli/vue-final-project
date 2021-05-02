<template>
  <div class="hero">
    <div class="container">
      <div v-for="(getAllNew, index) in getAllNews" :key="index" class="cards">
        <p class="source">{{ getAllNew.source.name }}</p>
        <h3 class="title">{{ getAllNew.title }}</h3>
        <p v-if="getAllNew.content !== null" class="content">
          {{ getAllNew.content }}
        </p>
        <div v-else class="">
          <p class="mytext">Click on button to read full news</p>
        </div>
        <small class="author">{{ getAllNew.author }}</small> <br />
        <a :href="getAllNew.url" target="_blank">
          <button type="button" class="but">Read more</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  mounted() {
    console.log(this.$route);
    const {
      params: { category },
    } = this.$route;
    this.fetchAllNews({ category });
  },
  computed: {
    ...mapGetters(["getAllNews", "getLoading"]),
  },
  methods: {
    ...mapActions(["fetchAllNews"]),
  },
};
</script>

<style>
.container {
  max-width: 100%;
  display: block;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffffff;
}
.content {
  color: #0a0a0a;
  font-weight: 400;
}

.title {
  font-weight: 700;
  color: black;
}
.author {
  color: #87ceeb;
  font-weight: bold;
}
.cards {
  max-width: 80%;
  margin-top: 20px;
  padding: 20px;
  margin: auto;
}
.source {
  color: #050505;
  font-size: 18px;
  font-weight: 500;
}
.mytext {
  color: #87ceeb;
}
.but {
  background: #87ceeb;
  color: #ffffff;
  border: none;
  width: 20%;
  height: 40px;
  border-radius: 5px;
  margin: 5px 0;
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
.cards {
  max-width: 100%;
}
.but {
  width: 50%;
}
</style>
