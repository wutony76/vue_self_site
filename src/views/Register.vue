<template>
  <main class="main has-footer commonbg">
    
    <Header v-bind:show_lang="show_lang" is_login="2" show_back="2"></Header>
    <div @click="hide_lang(4)" class="bodydiv">
    
      <!--
      <div class="welcome">
        
        <img src="../assets/mobile/img/Create.png" />
      </div>
      -->
      

      
      <!--
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

            <span 
              @click='spendPhone()'
              class='botton'>
              驗證手機
            </span>

          </p>

          <p>
            <img src="../assets/mobile/img/icon3.png" />
            <input
              type="text"
              placeholder="請輸入驗證碼"
              v-model="user.check_code"
              tag=""
            />
          </p>



        </div>

        <p @click="register()" class="forget">
          <a href="javascript:void(0)">{{ $t("login.singUp") }}</a>
          <a href="javascript:void(0)" class="wright"
            ><img src="../assets/mobile/img/wright.png"
          /></a>
        </p>
      </div>


      -->



      <div class="login">

        <p class="forget">
          <a class="main-botton"  @click="new_wallet()" href="javascript:void(0)">
            開啟新錢包
          </a>
        </p>

        <p class="forget">
          <a class="main-botton"  @click="go_login()" href="javascript:void(0)">
            直接登入 (已綁定錢包)
          </a>
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
  name: "Register",

  components: {
    Header,
  },


  data() {
    return {
      show_lang: 1,
      
      user: {
        phone: "",
        check_code: "",
      },
      captcha_image_url:'',
      
    };
  },



  created(){},


  mounted(){
    this.$mixapi.check_session();
    this.$nextTick(()=>{
        //this.captcha_image_url = this.gen_image_url();
        this.user.invite_code = this.$route.query.invit;
    })
  },


  methods: {
    
    new_wallet(){
      Cookies.remove('access_token');
      this.$router.push('/register_new');
    },


    go_login(){
      let self = this;
      self.$router.push("/login");
    },







    hide_lang(type) {
      this.show_lang = type;
    },


    spendPhone(){
      console.log( "spendPhone" );
      let self = this;
      let data = this.user;
      let post_data = {
        'mobile':data.phone
      };


      this.$mixapi.call("send_mobile_code", post_data, function(res) {
        console.log("register res=" + JSON.stringify(res));

        if (res.code != 0) {
          self.$layer.msg(res.reason);
          return;
        }
        //self.$router.push("/login");
      });

    },


    register() {

      var self = this;
      var post_data = this.user;
      console.log("register post=" + JSON.stringify(post_data));

      this.$mixapi.call("user/register", post_data, function(res) {
        console.log("register res=" + JSON.stringify(res));

        if (res.code != 0) {
          self.$layer.msg(res.reason);
          return;
        }

        self.$router.push({name: "RegisterActive", params: {
          user: {
            phone: res.data.phone,
            password: res.data.password,
          }
        
        }});
     });

    },

    gen_image_url() {
      var sessid = Cookies.get("sessid");
      var url = this.$mixapi.base_url + "captcha/image?t=" + Date.now() + "&q=" + sessid;
      return url;
    },
    new_captcha_image(){
      var sessid = Cookies.get("sessid");
      this.$mixapi.do_get("captcha/clear?q=" + sessid);
      this.captcha_image_url = this.gen_image_url();
      console.log("new_captcha_image");
    }
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
  /**
  margin-bottom: 200px;
   */

  margin-top: 0;
  margin-bottom: 0;
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


