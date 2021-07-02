<template>
  <div>
    <img v-bind:src="imgReview">
    <div v-html="htmlString"></div>
    <div v-html="htmlString1"></div>
    <div><img v-bind:src="eva"></div>
    <div><img v-bind:src="how1"></div>
  <div v-html="htmlString2"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      imgReview: "https://cdn.shopify.com/s/files/1/0231/6137/2752/files/LANDING-PAGE_8e928f04-76de-4fc1-8479-6270636d1649.jpg?v=1621034324",
    htmlString:"<h2>WE WANT TO HEAR<br>FROM YOU!</h2>",
     htmlString1:"<p>Every month a new winner!<br>Other LINE FRIENDS customers<br>want to hear about your experience<br>with our products.</p>",
    eva:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/PRODUCT_709c5341-9a41-410a-a78e-7988d34b01d7.jpg?v=1625162677",
    how1:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/1_e8bf532e-5203-454d-84d4-a762f1dc9a63.jpg?v=1622572541",
    htmlString2:"<p>No products found in this collection</p>"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>