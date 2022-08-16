<template>

  
  
<main class="commonbg main has-footer">
  <Nav></Nav>

  <!-- header -->
  <header id="home" class="header">
    <div class="overlay text-white text-center">
      <h1 class="display-2 font-weight-bold my-3"> 吳東霖 </h1>
      <!--
      <h2 class="display-4 mb-5"> 工作經歷 &amp; 專案展示 </h2>
      -->
      <h2 class="display-4 mb-5"> Unity應用 &amp; 遊戲開發 </h2>
      <a class="btn btn-lg btn-primary" href="#gallary">工作經歷</a>
    </div>
  </header>

  <!--  About Section  -->
  <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
    <div class="row">
      <div class="col-lg-6 has-img-bg"></div>
      <div class="col-lg-6">
        <div class="row justify-content-center">
          <div class="col-sm-8 py-5 my-5">
            <h2 class="mb-4"> 自傳 </h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quisquam accusantium nostrum modi, nemo, officia veritatis ipsum facere maxime assumenda voluptatum enim! Labore maiores placeat impedit, vero sed est voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita alias dicta autem, maiores doloremque quo perferendis, ut obcaecati harum, 
              <br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum necessitatibus iste,nulla recusandae porro minus nemo eaque cum repudiandae quidem voluptate magnam voluptatum? 
              <br>Nobis, saepe sapiente omnis qui eligendi pariatur. quis voluptas. Assumenda facere adipisci quaerat. Illum doloremque quae omnis vitae.
            </p>
            <p><b>Lonsectetur adipisicing elit. Blanditiis aspernatur, ratione dolore vero asperiores explicabo.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ab itaque modi, reprehenderit fugit soluta, molestias optio repellat incidunt iure sed deserunt nemo magnam rem explicabo vitae. Cum, nostrum, quidem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  
  <div id="work" class="work-content">

    <div class="stepsmainblock" id="steps">
        <div class="wrap">
            <div class="dashtop"></div>
            <h2>
                How to work with platform
                <small> simple <span class="gt"> 3 steps </span> to get earnings </small>
            </h2>

            <div class="stepsline">
              <div class="bigstepline"></div>
              <div class="bigsteplinecic1"></div>
              <div class="stepslinewrap">
                  <h3>Step #1: Make deposit</h3>
                  <div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                    <h4>Get</h4>
                    We recommend to use: 
                    <b>TronLink</b> / <b>TronMask</b> 
                    browsers extensions, or 
                    <a href="#" target="_blank">TronWallet</a> / <a href="#" target="_blank">Banko</a> 
                    mobile apps.
                    <br>
                    You can get TRX coins via popular exchangers.
                    <a href="#" data-remodal-target="tron" class="maindescbut">
                      How to get TRX
                    </a>
                  </div>

                  <div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                    <h4>Send TRX to our smart-contract</h4>
                    Send any amount of TRX on smart-contract address and start to get earnings every moment. Minimal deposit amount is 
                    <b>300 USDT</b>
                    <a href="#" data-remodal-target="invest" class="maindescbut">Snap purchase package</a>
                  </div>
              </div>
              <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
                <div class="icosteps2">
                    <!--
                    <img src="./css/icostep2.png" alt="">
                    -->
                    <img src="../assets/work/icostep5.png" alt="">
                </div>
              </div>
            </div>


            <div class="stepsline">
                <div class="bigsteplinecic1"></div>
                <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
                    <div class="icosteps2">

                    </div>
                    <form class="maincontform">
                        <label>Your TRX wallet address:</label>

                        <input type="text" class="trxWallet authTrue" value="Wallet address" style="display:block !important" readonly="">
                        <input type="text" class="trxWallet authFalse" placeholder="Connect with your wallet app..." readonly="" style="display: none;">
                        <a href="#" data-remodal-target="wallet" class="maindescbut">
                            Check wallet statistics
                        </a>
                    </form>
                </div>
                <div class="stepslinewrap stepslinewrapright fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                    <h3>Step #2: Get earnings</h3>
                    <div class="stepsblock stepsblockfull">
                        <h4> Get your TRX every moment</h4>
                        You can check all your wallet information, including your deposits, earnings, withdraw and referral statistics in real time.
                        <br><br>
                        <u>
                            Additional earnings with referral program:
                        </u>
                        <br>
                        3 levels of affiliate rewards: 
                        <a href="#" data-remodal-target="wallet" class="maindescbut">
                            Your wallet statistics
                        </a>

                    </div>
                </div>
            </div>


            <div class="stepsline">
              <div class="bigsteplinecic1"></div>
              <div class="stepslinewrap fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <h3>Step #3: Request withdraw</h3>
                <div class="stepsblock stepsblockfull2">
                  <h4> Request TRX withdraw</h4>
                  <i class="far fa-check-circle"></i>
                  Your payout will come
                  <b>instantly</b>
                  <br><br>
                  <i class="far fa-check-circle"></i>
                  Request withdraw from the
                  <b>same wallet</b>
                  you deposited
                  <br><br>
                  <i class="far fa-check-circle"></i>
                  All your wallet deposits and referral earnings will be withdrawn with single transaction per 1 request
                </div>
              </div>
              <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
                  <div class="icosteps2">
                      <img src="../assets/work/icostep5.png" alt="">
                  </div>
              </div>
            </div>

        </div>
    </div>
  </div>


  


  <!--  gallary Section  -->
  <div id="gallary" class="text-center bg-dark text-light has-height-md middle-items wow fadeIn">
      <h2 class="section-title">OUR MENU</h2>
  </div>
  <div class="gallary row">
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-1.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-2.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-3.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-4.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-5.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-6.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-7.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-8.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-9.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-10.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-11.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
      <div class="col-sm-6 col-lg-3 gallary-item wow fadeIn">
          <img src="assets/imgs/gallary-12.jpg" alt="template by DevCRID http://www.devcrud.com/" class="gallary-img">
          <a href="#" class="gallary-overlay">
              <i class="gallary-icon ti-plus"></i>
          </a>
      </div>
  </div>

  <!-- BLOG Section  -->
  <div id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
      <h2 class="section-title py-5">EVENTS AT THE FOOD HUT</h2>
      <div class="row justify-content-center">
          <div class="col-sm-7 col-md-4 mb-5">
              <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true">Foods</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#juices" role="tab" aria-controls="pills-profile" aria-selected="false">Juices</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">
                  <div class="col-md-4">
                      <div class="card bg-transparent border my-3 my-md-0">
                          <img src="assets/imgs/blog-1.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$5</a></h1>
                              <h4 class="pt20 pb20">Reiciendis Laborum </h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card bg-transparent border my-3 my-md-0">
                          <img src="assets/imgs/blog-2.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$12</a></h1>
                              <h4 class="pt20 pb20">Adipisci Totam</h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card bg-transparent border my-3 my-md-0">
                          <img src="assets/imgs/blog-3.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$8</a></h1>
                              <h4 class="pt20 pb20">Dicta Deserunt</h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-pane fade" id="juices" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div class="row">
                  <div class="col-md-4 my-3 my-md-0">
                      <div class="card bg-transparent border">
                          <img src="assets/imgs/blog-4.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$15</a></h1>
                              <h4 class="pt20 pb20">Consectetur Adipisicing Elit</h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 my-3 my-md-0">
                      <div class="card bg-transparent border">
                          <img src="assets/imgs/blog-5.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$29</a></h1>
                              <h4 class="pt20 pb20">Ullam Laboriosam</h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 my-3 my-md-0">
                      <div class="card bg-transparent border">
                          <img src="assets/imgs/blog-6.jpg" alt="template by DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                          <div class="card-body">
                              <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$3</a></h1>
                              <h4 class="pt20 pb20">Fugit Ipsam</h4>
                              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- REVIEWS Section  -->
  <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <h2 class="section-title my-5 text-center">專案介紹</h2>
      <div class="row mt-3 mb-5">
          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">John Doe</h3>
                  <h6 class="testmonial-subtitle">Web Designer</h6>
                  <div class="testmonial-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!</p>
                  </div>
              </div>
          </div>
          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">Steve Thomas</h3>
                  <h6 class="testmonial-subtitle">UX/UI Designer</h6>
                  <div class="testmonial-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus obcaecati cum eligendi perferendis magni dolorum ipsum magnam, sunt reiciendis natus. Aperiam!</p>
                  </div>
              </div>
          </div>
          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">Miranda Joy</h3>
                  <h6 class="testmonial-subtitle">Graphic Designer</h6>
                  <div class="testmonial-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nam. Earum nobis eligendi, dignissimos consequuntur blanditiis natus. Aperiam!</p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- CONTACT Section  -->
  <div id="contact" class="container-fluid bg-dark text-light border-top wow fadeIn">
      <div class="row">
          <!--
          <div class="col-md-6 px-0">
              <div id="map" style="width: 100%; height: 100%; min-height: 400px"></div>
          </div>
          -->
          <div class="col-md-12 px-5 has-height-lg middle-items"
            style="
              min-height: 350px;
            ">
            
              <h5 
                style="
                width:auto;
            
                ">
                其他資訊 | Information
              </h5>
              <p></p>
              <!--
              <p>Information</p>
              -->
            
              <div class="text-muted">
                  <!--
                  <p><span class="ti-location-pin pr-3"></span> 12345 Fake ST NoWhere, AB Country</p>
                  <p><span class="ti-support pr-3"></span> (886) 910987324</p>
                  -->
                  <p><span class="ti-facebook pr-3"></span>wuotny76@gmail.com</p>
                  <p><span class="ti-email pr-3"></span>wuotny76@gmail.com</p>
                  <p><span class="ti-desktop pr-3"></span>wuotny76@gmail.com</p>
                  <p><span class="ti-cloud pr-3"></span>wuotny76@gmail.com</p>
                  <p><span class="ti-github pr-3"></span>wuotny76@gmail.com</p>

              </div>
          </div>
      </div>
  </div>



  

  
  
  <!--
    <login-header show_h5="1"></login-header>

    <div class="bodydiv">

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

        <div class="wallets">
          <div
          
            class="wallet-item"
            v-for="(item, index) in user_items"
            v-bind:key="index"
          >

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
          </div>
        </div>




        



      </div>

      <div class="weui-popup__overlay" style="display: none">&nbsp;</div>
    </div>
    <bottom-button :key="refresh_key"></bottom-button>

    -->
  </main>


</template>

<script>
// @ is an alias to /src
//import BottomButton from "@/components/BottomButton.vue";
//import LoginHeader from "@/components/LoginHeader.vue";
//import Notification from "@/components/Notification.vue";

import Nav from "@/components/SelfNav.vue";
import Cookies from 'js-cookie'
//import { apiUserInfo, apiTotal } from "@/api/api";

export default {
  name: "Home",
  components: {
    Nav,
    //BottomButton,
    //LoginHeader,
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
  .work-content{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  .stepsmainblock {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 60px 0;
  }

  .wrap {
    width: 98%;
    /*
    max-width: 1180px;
    */
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
  }

  .dashtop {
    width: 97%;
    height: 2px;

    top: -1px;
    position: absolute;
    background: url(../assets/work/dash.png) center;
  }

.stepsmainblock h2 {
    color: #fff;
    text-align: center;
    font-size: 44px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 60px;
}

.stepsmainblock h2 small {
    display: block;
    font-size: 22px;
    font-weight: 200;
    line-height: 50px;
    letter-spacing: 1px;
}

.stepsline h3 {
    font-size: 30px;
    text-align: center;
}

h4 {
  font-size: none;
}


.stepsblock h4 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
}

.stepsblock b {
    color: #02ba96;
}








.gt {
    color: #02ba96;
    vertical-align: baseline;
}

.stepsline {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    margin-bottom: 60px;
}

.bigstepline {
    position: absolute;
    top: 165px;
    left: 50%;
    margin-left: -1px;
    width: 3px;
    height: 800px;
    background: url(../assets/work/dash2.png);
}

.bigsteplinecic1 {
    position: absolute;
    top: calc(50% - 10px);
    right: calc(50% - 16px);
    width: 31px;
    height: 31px;
    background: #303030;
    border-radius: 50%;
    border: 3px solid #5d5d5d;
}

.stepslinewrap {
    width: 50%;
}

.fromLeftIn {
    transition: transform 1s ease,opacity 1s ease;
    transform: translate(0,0);
    opacity: 1;
}

.fromRightIn {
    transition: transform 1s ease,opacity 1s ease;
    transform: translate(0,0);
    opacity: 1;
}

.stepsblock {
    display: inline-block;
    width: calc(50% - 45px);
    margin: 20px 15px;
    padding: 20px;
    color: #b7b7b7;
    text-decoration: none;
    line-height: 18px;
    font-weight: 300;
    border-top: 5px solid #02ba96;
    text-shadow: 1px 1px 1px #333;
    transition: .3s;
    text-align: left;
    box-shadow: 0 0 30px #1f1f1f;
    background: #282828;
    background: -moz-linear-gradient(left,#282828 0%,#353535 100%);
    background: -webkit-linear-gradient(left,#282828 0%,#353535 100%);
    background: linear-gradient(to right,#282828 0%,#353535 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#282828',endColorstr='#353535',GradientType=1);
}


/**
.stepslinewrap div {
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
 */


 .stepsblock .maindescbut:hover {
    border-bottom: none;
    margin-top: 20px;
    margin-bottom: 0;
}

.stepsblock .maindescbut {
    height: 36px;
    margin-top: 20px;
    line-height: 34px;
    text-align: center;
    font-size: 14px;
    color: #fff;
}

.maindescbut {
    display: block;
    width: 100%;
    height: 46px;
    margin-top: 30px;
    line-height: 42px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background: #02ba96;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid #047d66;
    text-shadow: 1px 1px 1px #047d66;
    transition: .1s;
    cursor: pointer;
    text-transform: uppercase;
}


.stepsblock.stepsblockfull {
    width: calc(100% - 40px);
    margin-left: 45px;
}
.stepsblock:hover {
    box-shadow: 0 0 5px #1f1f1f;
    color: #fff;
    transform: scale(1.02);
}

.icosteps2 {
    width: 140px;
    height: 140px;
    padding: 28px 0;
    text-align: center;
    background-color: #282828;
    border-radius: 50%;
    box-shadow: inset 0 0 50px #1b1b1b;
    display: block;
    margin: 0 auto;
}
.icosteps2 img {
    height: 80px;
}

</style>





