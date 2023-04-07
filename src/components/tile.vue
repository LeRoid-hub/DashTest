<template>
  <div class="tile">
      <h2>
          <slot name="tName"></slot>
      </h2>
      <div class="contents">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "tile"
}
</script>

<style scoped>
.tile{
    padding-left: 3em;
    padding-right: 3em;
    padding-bottom: 3em;
    padding-top: 1.5em;

    margin: 2em;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
}
.contents{
    color: red;
}
</style>