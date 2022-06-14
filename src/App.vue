<template>
  <div id="app">
    <div class="navbar">
      <div class="navbar__left-content">
        <div class="navbar__app-name" @click="$router.push('/')">PROJECT 3</div>
        <router-link class="navbar__link" to="/">
          Magazine dashboard
        </router-link>
        <router-link class="navbar__link" to="/example">
          Example Dashboard
        </router-link>
      </div>
    </div>
    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsMenu: [
        {
          label: "Magazine dashboard",
          to: "/",
        },
        {
          label: "Example Dashboard",
          to: "/example",
        },
      ],
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: #5a5a5a;
  font-size: 1rem;
  margin: 0;
  min-width: 360px;
  font-family: "Montserrat";
  color: white;
}

.app__body {
  height: calc(100vh - 3.3rem);
  margin-top: 0.3rem;
  overflow: auto;
}

.navbar {
  height: 3rem;
  display: flex;
  background: #2a2a2a;
  color: white;
  box-shadow: 0 0 0 0.4rem #ea5414;
}

.navbar__left-content {
  display: flex;
  height: 100%;
  align-items: center;
}

::-webkit-scrollbar {
  height: 12px;
  width: 12px;
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #ea5414;
  -webkit-border-radius: 1ex;
  -webkit-column-width: 1ex;
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar-corner {
  background: #000;
}

a {
  color: white;
  text-decoration: none;
}

.navbar__app-name {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  background: #ea5414;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0 1rem;
}

.navbar__link {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 1rem;
  border-bottom: 4px solid transparent;
  transition: 0;
}

.router-link-exact-active,
.navbar__link:hover {
  border-color: #ea5414;
  background: white;
  color: #ea5414;
  margin: 0;
  padding: 0 1rem;
  transition: 0.2s;
}
</style>
