<template>
  <div>
  <div v-show="!user.email" id="naverIdLogin"></div>
  <button v-show="user.email" @click="logout">로그아웃</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: "null",
    };
  },
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "iUoN2l1TLmV4cr8EBBhy",
      callbackUrl:"http://localhost:8080/naverlogin2",
      isPopup:false,
      loginButton:{color:"green", type:3, height:60},
    });

    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status)=>{
      if (status){
        console.log(status);
        console.log(this.naverLogin.user);

        this.$store.commit("user", this.naverLogin.user);
      }
    });
  },
  unmounted() {},
  methods: {
    logout(){
      const accesToken = this.naverLogin.accesToken.accesToken;
      const url = "/oauth2.0/token?grant_type=delete&client_id=iUoN2l1TLmV4cr8EBBhy&client_secret=w21priqU20&access_token=" +
        accessToken+
        "&service_provider=NAVER";

      axios.get(url).then((res)=> {
        console.log(res);
        this.$store.commit("user",{});
        this.$router.push({path:"/naverlogin2"});
      });
    },
  },
};
</script>