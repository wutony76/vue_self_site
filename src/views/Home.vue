<template>
  <main class="commonbg main has-footer">
    <login-header show_h5="1"></login-header>

    <div class="bodydiv">

      <!--
      <div class="problem">
        <div class="problemcon">
          <div class="problemconL">
            <img src="../assets/mobile/img/help.png" />
          </div>
          <div class="problemconR text-left">
            <h2>{{ $t("homeProblem") }}</h2>
            <p>
              <a href="#/notice" class="" style="color: rgb(255, 255, 255)">
                {{ $t("homePromotions") }}
              </a>
            </p>
          </div>
        </div>
      </div>
      -->

      <div class="main-box" >
        <div class="box1" >
          <h1>
            {{ my_usdt }} USDT
          </h1>
        </div>
        <div class="box1" >
          ≈ NT {{ my_usdt_to_nt }}
        </div>

      </div>

      

      <div class="quicknav">

        <router-link to="/trans_out_req">
          <h4>
            <img src="../assets/lynx/c_b1.png" />
          </h4>
          <p>轉帳</p>
        </router-link>

        <router-link to="/trans_in">
          <h4>
            <img src="../assets/lynx/c_b2.png" />
          </h4>
          <p>收款</p>
        </router-link>

        <router-link to="/fast">
          <h4>
            <img src="../assets/lynx/c_b3.png" />
          </h4>
          <p>轉換</p>
        </router-link>

        
        <a  @click='go_bank()' href="javascript:void(0)">
          <h4>
            <img src="../assets/lynx/c_b4.png" />
          </h4>
          <p>帳務</p>
        </a>



        <a  @click='logout()' href="javascript:void(0)">
          <h4>
            <img src="../assets/lynx/c_b5.png" />
          </h4>
          <p>登出</p>
          
        </a>

      </div>

      
      <div class="top3">

        <!--
        <div
          class="line"
          style="background: rgb(196, 171, 154); margin-top: 40px"
        >
          &nbsp;
        </div>
        -->

        <div class="wallets">
          <div
          
            class="wallet-item"
            v-for="(item, index) in user_items"
            v-bind:key="index"
          >

<!--
            <router-link >
              -->
              <table
                :to="{name: 'WalletItem', query: {id: item.item_id }}"
              >
                <tr>
                  <td class="icon">
                    <img 
                      v-if = "item.name == 'USDT'"
                      src="../assets/lynx/usdt.png" 
                    />
                    <img 
                      v-if = "item.name == 'TRX'"
                      src="../assets/lynx/trx.png" 
                    />
                  </td>
                  <td class="name">
                    <span>{{ item.name }}</span>
                  </td>
                  <td class="num">
                    <span>{{ item.credit }}</span>
                    <br />≈ NT {{ item.usd }}
                  </td>
                </tr>
              </table>
<!--
            </router-link>
            -->
          </div>
        </div>




        



      </div>

      <div class="weui-popup__overlay" style="display: none">&nbsp;</div>

      <!--
      <notification></notification>
      -->
    </div>
    <bottom-button :key="refresh_key"></bottom-button>
  </main>
</template>

<script>
// @ is an alias to /src
import BottomButton from "@/components/BottomButton.vue";
import LoginHeader from "@/components/LoginHeader.vue";
//import Notification from "@/components/Notification.vue";
import Cookies from 'js-cookie'
//import { apiUserInfo, apiTotal } from "@/api/api";

export default {
  name: "Home",
  components: {
    BottomButton,
    LoginHeader,
 //   Notification,
  },


  data() {
    return {
      my_usdt: 0,
      my_usdt_to_nt: 0,

      user_wallet: 0,
      user_wallet_total: 0,
      user_promotion: 0,
      user_promotion_total: 0,
      accumulated: 0,
      member_ship: 0,
      user_items: [],

      refresh_key:0,
    };
  },

  created() {},

  mounted() {
    this.$nextTick(() => {
      this.get_user_info();
      this.get_user_items();
    });
  },


  methods: {

    get_user_info() {

      let btn_name = Cookies.get('bottonStr');
      console.log("btn_name->" + btn_name);
      if ( btn_name != "home" ){
        Cookies.set('bottonStr', "home");
        this.refresh_ui();
      }

      

      //
      console.log("this->" + this);
      var self = this;

      this.$mixapi.call("user/get_info", {}, function(res) {
        console.log("Home get_user_info res=" + JSON.stringify(res));
        self.my_usdt = res.data.my_usdt;
        self.my_usdt_to_nt = res.data.my_usdt_to_nt;
        //console.log( typeof res.status);

        /*

        if (res.code == 0) {
          //console.log("ttt1");
          //console.log(res.data.basic_trx);

          self.my_total = res.data.total_credit;

          self.user_wallet = res.data.basic_trx;
          self.user_wallet_total = res.data.basic_trx_total;

          self.user_promotion = res.data.promotion_trx;
          self.user_promotion_total = res.data.promotion_trx_total;

        } else {
          self.$layer.msg(self.$t("login.loginError"));
        }
        */

      });
    },


    get_user_items() {
      var self = this;
      this.$mixapi.call("user/get_items", {}, function(res) {
        if (res.code == 0) {
          self.user_items = res.data.items;
        } 

      });
    },

    go_bank(){
      this.$router.push('/wallet_item');
      /*
      var self = this;
      this.$mixapi.call("user/get_items", {}, function(res) {
        if (res.code == 0) {
          self.user_items = res.data.items;
        } 

      });
      */


    },
    


  
    logout(){  
      Cookies.remove('access_token');
      this.$router.push('/login');//返回上一层
    },


    refresh_ui(){
      this.refresh_key +=1;
    }
  

  },
};
</script>




<style scoped>
  a{
    width:100%;
  }  

  .main-box{

    margin-left: 5%;
    margin-right: 5%;
    min-height: 250px;
    background: #0e2f56;
    -webkit-border-radius: 10px;


    /** center  */
    display: flex;
    justify-content: center; 
    align-items: center; 



    color: #ececda;


    /*display: flex;*/
    flex-direction: column;  /* 按照列column(垂直方向)排列*/
  }


  .main-box .box1{
    width:100%;
    text-align: center;

  }



  /** center botten list */
  .quicknav {
    overflow: hidden;
    /**
    margin: 20px 0;
     */
    margin:0;
    margin-top:10px;
    margin-left: 5%;
    margin-right: 5%;




    /** center  */
    display: flex;
    justify-content: center; 
    align-items: center; 

  }

  .quicknav a h4 {
    margin: 0 auto;
    height: 55px;
    line-height: 55px;
  }

  .quicknav a{
    width: 19.3%;
    color:#0e2f56;
    font-weight:700;
    border: 2px solid #0e2f56;
    -webkit-border-radius: 10px;

    padding-bottom: 10px;

    margin-left: 5px;
    margin-right: 5px;
  }

  .quicknav a:first-child{
     margin-left: 0;
  }

  .quicknav a:last-child{
     margin-right: 0;
  }

  @media screen and (max-width: 800px) { 
    .main-box{
      min-height: 180px;
    }
  }




.top3{
  background:unset;

  padding-left: 5%;
  padding-right: 5%;
}

.wallets {
  max-width: 100%;
  width: auto;
  
  margin:0;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}

.wallet-item,
.wallet-item table,
.wallet-item .name span,
.wallet-item .num span,
.wallet-item .num
{
  color: #0e2f56;
}

.wallet-item table{
  border-collapse: collapse;
  border-color: 1px dashed var(--main_btn_color);

}

.wallet-item .num{
  border-bottom: 1px dashed var(--main_btn_color);
}

.wallet-item .icon img{
  margin: 5px;
  width:72px;
}




</style>






