<template>
  <div>
    <h1>Basics</h1>
    <button v-tooltip="'This is our button'">Button</button>
  </div>
</template>

<script>
import "floating-vue/dist/style.css";
export default {
  name: "IndexPage",
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "This is the home Page",
      },
    ],
  },

  data() {},
};
</script>
