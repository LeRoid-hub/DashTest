<script setup>
import Tile from "@/components/tile.vue";
</script>
<template>
  <div class="Dashboard">
      <tile>
          <template #tName>Plesk</template>
          <a href="https://barfuss.email:8443/login_up.php">Zum Login</a>
      </tile>
      <title>
          <template #tName>CouchDB Login</template>
          <a href="https://barfuss.email:6984/_utils/#login">Zum Login</a>
        </title>
      <tile>
          <template #tName>Home</template>
          <router-link to="/Home">Home</router-link>
      </tile>
  </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

<style scoped>
.Dashboard{
    display: grid;
    grid-template-columns: auto auto;
}
tile{
    display: inline-grid;
}
</style>
