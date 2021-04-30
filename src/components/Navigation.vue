<template>
  <div class="nav">
    <div class="nav-container">
      <nav>
        <ul>
          <li>
            <router-link
              :to="{ name: 'Home', params: { category: '' } }"
              class="nav-link"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Bussiness', params: { category: 'business' } }"
              class="nav-link"
              >Bussiness</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'Entertainment',
                params: { category: 'entertainment' },
              }"
              class="nav-link"
              >Entertainment</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'General', params: { category: 'general' } }"
              class="nav-link"
              >General</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Health', params: { category: 'health' } }"
              class="nav-link"
              >Health</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Science', params: { category: 'science' } }"
              class="nav-link"
              >Science</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Sports', params: { category: 'sports' } }"
              class="nav-link"
              >Sports</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Technology', params: { category: 'technology' } }"
              class="nav-link"
              >Technology</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  font-size: 18px;
  text-decoration: none;
  justify-content: space-evenly;
}
li {
  color: #2c3e50;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
.nav {
  width: 100%;
  height: 50px;
  background: #e4e8e9;
  display: flex;
  justify-content: center;
}
.nav-container {
  width: 80%;
  margin: auto;
}
</style>
