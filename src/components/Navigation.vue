<template>
  <div class="nav">
    <div class="nav-container">
      <nav>
        <input type="checkbox" id="nav-check" />
        <label for="nav-check">
          <div class="hamburger-menu">
            <img src="../assets/ham.png" alt="menu" />
          </div>
        </label>
        <div class="nav-list">
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
        </div>
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
}
li {
  color: #2c3e50;
}
a {
  color: #2c3e50;
  text-decoration: none;
  margin-right: 2rem;
}
.nav {
  width: 100%;
  height: 80px;
  background: #e4e8e9;
  display: flex;
}
.nav-container {
  width: 80%;
  margin: auto;
  height: auto;
}

.hamburger-menu {
  display: none;
}
#nav-check {
  display: none;
}
@media screen and (max-width: 736px) {
  .nav-list {
    display: none;
  }
  nav ul {
    display: block;
    list-style: none;
  }
  .hamburger-menu {
    display: block;
    width: 50px;
    height: 50px;
  }
  .hamburger-menu img {
    width: 100%;
  }
  nav #nav-check:checked ~ .nav-list {
    display: block;
    position: absolute;
    background-color: #87ceeb;
    text-align: center;
    left: 0;
    right: 0;
  }
}
</style>
