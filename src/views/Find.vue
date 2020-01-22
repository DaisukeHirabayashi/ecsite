<template>
  <div>
    <h3>{{ keyword }}</h3>
  </div></template
>

<script>
import { mapState } from "vuex";
export default {
  name: "finder",
  computed: {
    ...mapState({
      keyword: "finditem"
    })
  },
  data() {
    return {
      aaa: "aaaa"
    };
  }
};
</script>
