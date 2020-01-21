<template>
  <div class="home">
    <h1>Home</h1>
    <template v-for="{ id, name } in items">{{ id }}{{ name }}</template>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        { id: 1, name: "aaa" },
        { id: 2, name: "bbb" },
        { id: 3, name: "ccc" }
      ]
    };
  }
};
</script>
