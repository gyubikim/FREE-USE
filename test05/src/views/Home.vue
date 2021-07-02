<template>
 <img v-bind:src="logo">
 <div><img v-bind:src="main"></div>
 <div v-html="htmlString0"></div>
 <div v-html="htmlString1"></div>
  <div><img v-bind:src="pink"></div><br><div><img v-bind:src="Yellow"></div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      logo: "https://cdn.shopify.com/s/files/1/0231/6137/2752/files/logo_410x.jpg?v=1573431073",
    main:"https://i.shgcdn.com/011108a3-b3e0-4e62-9627-9b8ab27c0d00/-/format/auto/-/preview/3000x3000/-/quality/best/",
    htmlString0:"<h2>New Collections</h2>",
    htmlString1:"<p>Cuteness Overload</p>",
    pink:"https://i.shgcdn.com/8cc96055-9d7e-4c90-acc3-42b2d15ca9c8/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    yellow:"https://i.shgcdn.com/f59dc46f-2d28-4990-84a3-e7be636a925c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>