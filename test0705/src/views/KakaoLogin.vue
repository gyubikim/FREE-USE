<template>
  <div>
    <h1>{{user.email? "로그인 성공!":"로그인 후 사용하세요."}}</h1>
    <a id="custom-login-btn" @click="kakaoLogin()"> <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" /> </a>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  computed:{
    user(){
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    kakaoLogin(){
      window.Kakao.Auth.login({
        scope:"profile_nickname,account_email,gender",
        success: this.getKakaoAccount,
        fail: function (error) {
          console.log(error);
        },
      });
    },
    getKakaoAccount(){
      window.Kakao.API.request({
        url:"/v2/user/me",
        success: (res)=>{
          const kakaoAccount = res.kakao_account;
          consol.log(kakaoAccount);

          this.$store.commit("user", kakaoAccount);
        },
      });
    },
  },
};
</script>