<template>
  <main class="main has-footer commonbg">
    <!--
    <Header v-bind:show_lang="show_lang" is_login="2" show_back="2"></Header>
    -->


    <div @click="hide_lang(4)" class="bodydiv">


      <div class="welcome">
        
        <h5>
          Lynx Wallet 新錢包創建中

          <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path fill="#3f8ee9" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
            </path>
          </svg>
        </h5>

      </div>



      

      <div class="msg">
        *等待開啟錢包時間若超過20分鐘，請點擊下方按鈕回到首頁，重新再嘗試一次.
      </div>

      <div class="login">
        <p class="forget">
          <a class="main-botton"  @click="go_index()" href="javascript:void(0)">
            返回首頁
          </a>
        </p>
      </div>


    </div>

  </main>
</template>



<script>
import Cookies from 'js-cookie'

export default {
  name: "RegisterNew",
  components: {
    //Header,
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
    this.$mixapi.check_session();
    this.$nextTick(()=>{
      this.do_submit();
    })
  },


  methods: {
    hide_lang(type) {
      this.show_lang = type;
    },

    go_index(){
       let self = this;
      self.$router.push("/login");
    },



    do_submit() {
      var self = this;
      var post_data = this.user;
      console.log("register active post=" + JSON.stringify(post_data));

      this.$mixapi.call("register_new", post_data, function(res) {
        console.log("register_new res=" + JSON.stringify(res));

        if (res.code != 0) {
          self.$layer.msg(res.reason);
          return;
        }

        Cookies.set('access_token', res.data.access_token);
        self.$router.push("/home");
     });
     

    },
  },
};
</script>


<style  scoped>

.main {
  background: #0e2f56;
}

.welcome{
  color: #3f8ee9;
}

.welcome h5{

  font-weight: 120;

}


.welcome h5 svg{
  width: 50px;
}







.msg{
  text-align: center;
  color: #d93030;

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


