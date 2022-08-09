<template>
  <main class="main has-footer commonbg">
    <Header v-bind:show_lang="show_lang"  is_login='1' show_back="1"></Header>
    <div @click="hide_lang(4)" class="bodydiv">

      <div class="welcome">
        <img src="../assets/lynx/main.png" />
      </div>

      <!--
      <div class="line"></div>
      -->

      <div class="login">
        <div class="logincon">
          <p>
            <img src="../assets/lynx/account.png" />
            <input
              type="text"
              placeholder="請輸入帳號"
              required="required"
              class="textbohy ztcolor3"
              v-model="form_data.username"
            />
          </p>

          <p>
            <img src="../assets/lynx/pwd.png" />
            <input
              type="password"
              placeholder="請輸入密碼"
              autocomplete="off"
              class="textbohy ztcolor3"
              v-model="form_data.password"
            />
          </p>
          <!---->
        </div>

        <!--
        <div class="switchcon">
          <div class="switch-container">
            <input id="switch" type="checkbox" class="switch" />
            <label for="switch"></label>
          </div>
          <span>{{ $t("login.thirdparty") }}</span>
        </div>
        -->

        <p class="forget">
          <a class="main-botton"  @click="login()" href="javascript:void(0)">
            點擊登入
          </a>
          <!--
          <a @click="login()" href="javascript:void(0)" class="wright">
            <img src="../assets/mobile/img/wright.png" />
          </a>
          -->
        </p>


      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Cookies from 'js-cookie';

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      show_lang: 1,
      form_data: {},
    };
  },
  mounted() {
    this.$mixapi.check_session();
  },
  methods: {
    hide_lang(type) {
      this.show_lang = type;
    },

    login() {

      //console.log( "click login");
      var self = this;
      self.form_data.url = document.URL; 

      this.$mixapi.call("login", self.form_data, function(res) {
        console.log( "ahui login >>> " + JSON.stringify(res) );
        console.log( "ahui login code==0 = " + res.code == 0);

        if (res.code != 0) {
           self.$layer.msg(self.$t("login.loginError"));
           return;
        }

        Cookies.set('access_token', res.data.access_token);

        self.$layer.msg(self.$t("login.loginSuccess"));
        self.$router.push("/home");
      
      });

    },
  },
};
</script>

<style  scoped>

.welcome{
  margin: 0;

}


.commonbg {
  /**
  background: url(../assets/mobile/img/120.01555df.png);
   */
  background: #0e2f56;
  background-size: 100% 100%;
  min-height: 1280px;
}


.main {
  padding: 75px 0 10px;
  min-height: 100vh;
  width: 100%;
}


.logincon p {
    /* border-bottom: unset; */
    border-bottom: 1px solid #ececda;
    margin: 8px 0 20px;
    display: flex;
}


.logincon p input {
  padding-left: 20px;
  padding-right: 20px;
}




input::placeholder {
    color: #3d6da5;
    font-size: 14px;
}



.ztcolor3 {
  color: #ececda;
}

.main-botton{
  -webkit-border-radius: 50px;
  /*
  background: linear-gradient(270deg, #dbbfad, #b39987);
  */
}


.forget {
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding-top: 10px;
  margin-bottom: 200px;
}




/** botton  */
.forget a{
  font-size: 17px;
  font-weight: 100;

  height:45px;
  line-height: 45px;
  background: #3d6da5;
  border: 1px solid #05182e;
}

.forget a:hover{
  text-decoration: unset;
  background: #3e75b4;

  border: 1px solid #05182e;
}

.forget a:first-child {
    color: #ececda;
    margin-top: 14px;
    float: left;
}

.forget a:last-child {
  width: 70%;
  -webkit-border-radius: 50px;

  /**
  border: 2px solid #ececda;
   */
}

@media screen and (max-width: 800px) { 
  .forget a:last-child {
    width: 100%;
    -webkit-border-radius: 50px;
  }

  .welcome img {
      width: 80%;
  }

} 






</style>
