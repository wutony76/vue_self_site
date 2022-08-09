<template>
  <header class="header">


    <div class="row">
      <div v-if="show_back == 2" @click="go_back()" class="col-auto px-0">
        <a href="#/my" class="navbar-brand">
          <span class="iconfont">  </span>
        </a>
      </div>


      <div class="col align-self-center " style="text-align:center;" >
        <!--
        <a v-show="show_h5 == 1" href="javascript:void(0)" class="navbar-brand">
          <span class="headertitle">LynxWallet</span>
        </a>
        -->

        <div v-show="show_h5 == 1" class="navbar-brand">
          
          <h5 class="mb-0"> <img src="../assets/lynx/logo_s.png"/> Lynx Wallet</h5>
        </div>

        <div v-show="show_h5 == 2" class="navbar-brand">
          <h5 class="mb-0">{{ title }}</h5>
        </div>
      </div>



      <div v-if="show_lang != 2" class="headerR" style="float: right">

        <a @click="click_logout()" href="javascript:void(0)">
          <img src="../assets/lynx/logout.png" />
        </a>

        <!--
        <a @click="show_lag($event)" href="javascript:void(0)">
          <img src="../assets/mobile/img/155.png" />
        </a>
        <Lang v-show="change_language == 2" v-on:hide_lang="hide_lang()"></Lang>
        <a @click="go_notice()" href="javascript:void(0)"
          ><div class="counter"></div>
          <img src="../assets/mobile/img/151.png"
        /></a>
        <a href="https://line.me/ti/g2/1cjeDLthVbjN9Pxn_mPae8t166W6oaFISW4LDQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          ><img src="../assets/mobile/img/150.png"
        /></a>
        -->
      </div>

    </div>

  </header>
</template>

<script>
//import Lang from "@/components/Lang.vue";
import Cookies from 'js-cookie';

export default {
  name: "LoginHeader",
  components: {
  //  Lang,
  },


  props: {
    show_lang: [Number, String],
    show_back: String,
    title: [String],
    show_h5: [Number, String],
  },
  watch: {
    show_lang: {
      handler: function () {
        this.$parent.hide_lang(3);
        this.change_language = 3;
      },
      deep: true,
    },
  },
  data() {
    return {
      change_language: this.show_lang,
    };
  },


  methods: {
    click_logout(){
      let self = this;
      let msg = "確定要登出嗎? (沒有綁定無法找回錢包)";
      if (confirm(msg) == true) {
        console.log("click_logout");
        self.logout();
      }
    },

    logout(){
      console.log("logout");
      Cookies.remove('access_token');
      this.$router.push('/login');//返回上一层
    },




    show_lag(e) {
      this.change_language = 2;
      e.stopPropagation();
    },
    go_back() {
      this.$router.go(-1); //返回上一层
    },
    go_notice() {
      this.$router.push("/notice");
    },
    hide_lang() {
      this.change_language = 1;
    },
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    /* margin-left: -15px; */


  padding-left: 20px;
}



.navbar-brand h5 img{
  height: 30px;
}
.navbar-brand h5{
  color: var(--main_ft_color);
}




.header {
  padding: 0px;
  padding-right: 10px;

  box-shadow: 0px 0px 30px 15px #0a94c961;
}


.header .navbar-brand {
  color: var(--main_ft_color);
}









.sing-up {
  float: right;
  height: 30px;
  line-height: 30px;
}

.headerR{
  margin-top: 0px;
}

.headerR a img {
  width: 32px;
  height: unset;
}

</style>
