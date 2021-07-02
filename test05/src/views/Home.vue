<template>
  <div class="home">
    <img alt="Vue logo" src="https://cdn.shopify.com/s/files/1/0231/6137/2752/files/logo_410x.jpg?v=1573431073" />
    <HelloWorld msg="New Collections" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
