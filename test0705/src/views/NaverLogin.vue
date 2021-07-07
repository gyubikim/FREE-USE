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
            clientId: "QduPlRSelgJ5yWTJ9nGu", // 개발자 센터 등록 id
            callbackUrl: "http://localhost:8080/naverlogin",
            isPopup: false,
            loginButton: { color: "green", type: 3, height: 60 },
        });

    this.naverLogin.init();


    //아래: 로그인이 일어났으면 로그인정보를 가져오겠다는 함수
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
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = "/oauth2.0/token?grant_type=delete&client_id=QduPlRSelgJ5yWTJ9nGu&client_secret=hc7e3KKiJU&access_token= + accessToken + &service_provider=NAVER";
    
    axios.get(url).then((res)=>{
      console.log(res);
      this.$store.commit("user",{});
      this.$router.push({path:"/naverlogin"});
    });
    },
  },
};
</script>