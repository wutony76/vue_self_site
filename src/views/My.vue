<template>
  <main class="flex-shrink-0 main has-footer commonbg">
   <login-header 
    show_back='1' 
    show_h5='2' 
    title="會員"
  >
  </login-header>


    <div class="v-content__wrap">

<!--
      <div  class="logo2">
        -->
      <div class="welcome">
        <p >
          <img src="../assets/lynx/main_b.png" />
        </p>
      </div>



      <div class="Deposit head-box ">
        <h1>
          錢包ID: {{book_id}}
        </h1>
      </div>



      <div  class="main3con bg5">
        <div  class="link">

          <router-link to='/about'>
            <div  class="linkL">
              <img

                src="../assets/lynx/c_b7.png"
              />
            </div>
            <div  class="linkM"> 關於我們 </div>
          </router-link>


          <router-link to='/bind_phone'>
            <div  class="linkL">
              <img
                src="../assets/lynx/c_b6.png"
              />
            </div>
            <div  class="linkM"> 綁定手機 </div>
          </router-link>


          <router-link to='/change_login_password'>
            <div  class="linkL">
              <img
                src="../assets/lynx/c_b8.png"
              />
            </div>
            <div  class="linkM"> 修改密碼 </div>
          </router-link>



          <a  @click="logout()"  href="javascript:void(0)">
            <div  class="linkL">
              <img src="../assets/lynx/c_b5.png"/>
            </div>
            <div  class="linkM">{{$t('myLogout')}}</div>
          </a>

          
        </div>
      </div>




      <!-- out link 

      <div class="Deposit">
        <h1>
          合作夥伴
        </h1>
      </div>


      <div  class="main3con bg5">
        <div  class="link">

          <a @click="goCoinCenter()" href="javascript:void(0)">
            <div  class="linkL">
              <img src="../assets/lynx/coincenter_logo.png"/>
            </div>
            <div class="linkM">
              礦癮 COIN-Center
            </div>
          </a>
          

          <a @click="goOutLink('http://www.bitcome-ca.com/#main')" href="javascript:void(0)">
            <div  class="linkL">
              <img src="../assets/lynx/bitcome_logo.png"/>
            </div>
            <div class="linkM">
              礦機合約化 Bitcome
            </div>
          </a>

          <a @click="goOutLink('https://play.google.com/store/apps/details?id=com.goldanage.g&hl=en_US&gl=US')" href="javascript:void(0)">
            <div  class="linkL">
              <img src="../assets/lynx/gac.jpg"/>
            </div>
            <div class="linkM">
              高登 Gac
            </div>
          </a>


          
          

          
        </div>
      </div>

      -->





      <div class="Deposit">
        <h1>
          相關資訊
        </h1>
      </div>

      <div  class="main3con bg5">
        <div  class="link">

          <a @click="goOutLink('https://coinmarketcap.com/zh-tw/currencies/tether/')" href="javascript:void(0)">
            <div  class="linkL">
              <img src="../assets/lynx/link.png"/>
            </div>
            <div class="linkM">
              CoinMarketCap
            </div>
          </a>
          
        </div>
      </div>

      


    </div>


    <bottom-button :key="refresh_key"></bottom-button>

  </main>
</template>






<script>
// @ is an alias to /src
import BottomButton from '@/components/BottomButton.vue'
import LoginHeader from '@/components/LoginHeader.vue'
import Cookies from 'js-cookie'

export default {
  name: "TradeList",
  components: {
    BottomButton,
    LoginHeader
  },
  data(){
    return{
      is_show_recharge:1,
      book_id: 0,
      my_total: 0,
      username:Cookies.get('username'),

      refresh_key:0,
    }
  },
   created() {},
    mounted() {
    this.$nextTick(() => {
      this.get_user_info();
      //this.get_total();
    });
  },
  methods:{
    show_recharge(){
      this.is_show_recharge=2
    },
    jump(str){
       this.$router.push(str);//返回上一层
    },
    logout(){
        Cookies.remove('access_token');
        this.$router.push('/login');//返回上一层
    },

    get_user_info() {

      let btn_name = Cookies.get('bottonStr');
      console.log("btn_name->" + btn_name);
      if ( btn_name != "my" ){
        Cookies.set('bottonStr', "my");
        this.refresh_ui();
      }



      var self = this;
      self.$mixapi.call("user/get_info", {}, function(res) {
        console.log(res);
        if (res.status == 1) {
          //console.log("basic_trx = " + res.data.basic_trx);
          //self.my_total = res.data.basic_trx;
          self.my_total = res.data.total_credit;
          self.book_id = res.data.book_id;
        
        } else {
          self.$layer.msg(self.$t("login.loginError"));
        }
      });
    },






    goCoinCenter(){
      window.location.href = "http://www.coincenter-us.com/";
    },

    goOutLink(url){
      window.location.href = url;
    },


    refresh_ui(){
      this.refresh_key +=1;
    }


  }
};
</script>



<style scoped>

.welcome {
    text-align: center;
    margin-top: 10px;
}


.head-box{
  /*
  display: flex;
    justify-content: center; 
    align-items: center; 
    */
    margin-left: 40px;
}

.Deposit h1{
  font-size: 25px;
  color: var(--main_bg_color);
}




.link .linkM a{
  color: var(--main_bg_color);
}
.linkM{
  color: var(--main_bg_color);
}
.linkL{
  border: 3px solid var(--main_bg_color);
}

</style>
