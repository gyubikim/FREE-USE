<template>
  <div>
    <!-- // 네이버 버튼 만들기 -->
    <p>
      {{
        user.email
          ? `"로그인 되었습니다.\n 당신의 이메일은 ${user.email}입니다. "`
          : "죄송합니다, 로그인해주세요. "
      }}
    </p>
    <div id="naverIdLogin"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "iRWhThdviePHZqOi2w8Q", // 개발자 센터 등록 id
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 }
    });

    this.naverLogin.init();
    // arrow 함수는 scope가 바뀌지 않는다.
    this.naverLogin.getLoginStatus(status => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        // window가 아닌 vue component가 가져와진다
        this.$store.commit("user", this.naverLogin.user);
      }
    });

    // this.naverLogin.getLoginStatus(function(status){
    //     this.naverLogin ... 이럴 땐 window 객체
    // });

    // console.log(window.naver);
  },
  unmounted() {},
  methods: {}
};
</script>
