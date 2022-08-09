<template>
  <main class="main has-footer commonbg">
    <Header v-bind:show_lang="show_lang" is_login="2" show_back="2"></Header>
    <div @click="hide_lang(4)" class="bodydiv">

      <div class="welcome">
        <img src="../assets/mobile/img/Create.png" />
      </div>

      <div class="login">
        <div class="logincon">
          <p>
            <img src="../assets/mobile/img/icon1.png" />
            <input
              type="text"
              name="mobile"
              placeholder="請輸入手機"
              v-model="user.phone"
              :regmsg="$t('login.regEmail')"
              required="required"
            />


          </p>

          <p>
            <img src="../assets/mobile/img/icon3.png" />
            <input
              type="text"
              placeholder="密碼"
              v-model="user.password"
              tag=""
            />
          </p>

          <p>
            <img src="../assets/mobile/img/icon3.png" />
            <input
              type="text"
              placeholder="密碼確認"
              v-model="user.password_confirm"
              tag=""
            />
          </p>



        </div>
        <!---->

        <p @click="do_submit()" class="forget">
          <a href="javascript:void(0)">啟用帳號</a>
          <a href="javascript:void(0)" class="wright"
            ><img src="../assets/mobile/img/wright.png"
          /></a>
        </p>
      </div>
    </div>

  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Cookies from 'js-cookie'
//import { apiRegister } from "@/api/api";
export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      show_lang: 1,
      user: this.$route.params.user,
      captcha_image_url:'',
    };
  },
  created(){},
  mounted(){
    //this.$mixapi.check_session();

  },
  methods: {
    hide_lang(type) {
      this.show_lang = type;
    },

    do_submit() {

      var self = this;
      var post_data = this.user;
      console.log("register active post=" + JSON.stringify(post_data));

      this.$mixapi.call("user/register_active", post_data, function(res) {
        console.log("register_active res=" + JSON.stringify(res));

        if (res.code != 0) {
          self.$layer.msg(res.reason);
          return;
        }

        self.$router.push("/login");
     });

    },
  },
};
</script>


<style  scoped>

.botton{
  color:#88afdd ;
  border: 1.3px solid #88afdd;
  padding:5px;
  margin-bottom: 5px;
  width:95px;
  text-align: center;
  border-radius: 5px;
}

.commonbg {

  /*
  background: url(../assets/mobile/img/120.01555df.png);
  background: #f1f1f1;
  */
  
  background: #0e2f56;
  background-size: 100% 100%;
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
  color: #ececda;
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

.forget a:first-child {
    font-size: 30px;
    color: #ececda;
    font-weight: 700;
    margin-top: 14px;
    float: left;
}


</style>


