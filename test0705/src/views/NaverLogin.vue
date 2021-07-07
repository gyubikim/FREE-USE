<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null,
    };
  },
  computed:{
    user(){
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientid:"QduPlRSelgJ5yWTJ9nGu", //개발자 센터-개요-클라이언트아이디
      callback: "http://localhost8080/naverlogin",//개발자센터-callback url
    });
  },
  unmounted() {},
  methods: {},
};
</script>