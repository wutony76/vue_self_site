<template>
<main class="commonbg main has-footer">

  <Nav
    :_type = "view_type"
  >
  </Nav>




  <!-- status 9  -->
  <div>
    <!-- header -->

    <!--
    <header id="home" 
      class="header"

      style="
        background:url('/img/py01.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> 系統WEB應用專案 </h1>
        <h2 class="display-4 mb-5"> Python &amp; Django </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>
    -->

    <!--  About Section  -->

    <!--
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('/img/py01.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                Python程式語言，後端與開發主要使用的程式語言，我們應用在許多地方，比較多用在系統與後端的開發上。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->



    <!-- 活動  -->
    <div id="testmonial" 
      class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" 
      style="margin-top: 10rem;" >

      <div class="row ">

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> WEB素材參考 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1a2YbtF42HZgySMNsH3RYSv9Si6hViNaqEAPIC8sifoo/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1a2YbtF42HZgySMNsH3RYSv9Si6hViNaqEAPIC8sifoo/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Vue-環境安裝&Coding紀錄 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/15Es0pi-d7acMLMVXk2Ra6gyNK9paoReEWp82JkXBdQQ/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/15Es0pi-d7acMLMVXk2Ra6gyNK9paoReEWp82JkXBdQQ/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> VS Code 設定</h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1aqvZV7ACWsKfKb62D5j1i4rQPFJopvJnh_4JvJv62L4/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1aqvZV7ACWsKfKb62D5j1i4rQPFJopvJnh_4JvJv62L4/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Unity紀錄 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/10DepCC8s48lj_Zlq210UhfvetNjeJGMdww-RTy8jIVc/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/10DepCC8s48lj_Zlq210UhfvetNjeJGMdww-RTy8jIVc/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

      </div>


      <div class="row " style="margin-top: 3rem !important;">

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> python3 -Selenium </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1noS66ImOGLC8wF8CacNl5XQNuFNV0YHH-NVPUyxl0xc/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1noS66ImOGLC8wF8CacNl5XQNuFNV0YHH-NVPUyxl0xc/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> python3 -Linux環境安裝 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1H71AjxcufTfGvYdhvWiKNf930kZcHtmp4hKxCJ6sKqo/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1H71AjxcufTfGvYdhvWiKNf930kZcHtmp4hKxCJ6sKqo/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> PHP7.2. MySQL. REDIS5 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1JOTDwLxuV83yY7j59syT2G_ANu_O5z15yRN3EUNhLOw/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1JOTDwLxuV83yY7j59syT2G_ANu_O5z15yRN3EUNhLOw/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> PHP5.6 </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1duYBUolZnG3p2kOmbsKSWOIWFObdJ1GT742xp0T9Xm4/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1duYBUolZnG3p2kOmbsKSWOIWFObdJ1GT742xp0T9Xm4/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
								</a>
              </p>

            </div>
          </div>
        </div>

      </div>



      <div class="row " style="margin-top: 3rem !important;">

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> JQuery </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/19sjHLuxcq1wM_kjv00OG5vBN8J8LdXj1Y6o_s5wk_xg/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/19sjHLuxcq1wM_kjv00OG5vBN8J8LdXj1Y6o_s5wk_xg/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> IOS憑證部分(Unity to IOS) </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1LT7RGtfeIlMXMHfvjp7L_1U0kyYsW0g_6Vmax39TI1Y/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1LT7RGtfeIlMXMHfvjp7L_1U0kyYsW0g_6Vmax39TI1Y/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> HTTPS -certbot- </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/19lKkSsV9v7cpQs491T14jfc3s12d1jT56eXdu58VHRo/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/19lKkSsV9v7cpQs491T14jfc3s12d1jT56eXdu58VHRo/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Git -gogs架設- </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1XFyIOJC_cFQ8a4N9Z5UyUP7xuEup1KfPTaws0kMcrkc/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1XFyIOJC_cFQ8a4N9Z5UyUP7xuEup1KfPTaws0kMcrkc/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

      </div>



      
      <div class="row " style="margin-top: 3rem !important;">

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Django </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1HoXqK1tfABnBpe9aQvvYcUdEKfhHADdNnwj3y9gkfBA/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1HoXqK1tfABnBpe9aQvvYcUdEKfhHADdNnwj3y9gkfBA/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> CSS-常用語法- </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1HoXqK1tfABnBpe9aQvvYcUdEKfhHADdNnwj3y9gkfBA/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1HoXqK1tfABnBpe9aQvvYcUdEKfhHADdNnwj3y9gkfBA/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Cordova -html轉android_proj- </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1XNrRY0H4601Qse6rziQcml73c9VqwxYu3S5-aVgEaK0/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1XNrRY0H4601Qse6rziQcml73c9VqwxYu3S5-aVgEaK0/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> Android -開發.相關紀錄- </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1CzT58yhVpWRYxSCzJSXBHbB9JzILBte8JqdyX-TCqr4/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1CzT58yhVpWRYxSCzJSXBHbB9JzILBte8JqdyX-TCqr4/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

      </div>



      <div class="row " style="margin-top: 3rem !important;">

        <div class="col-md-3 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> 3D筆記 (MAX、blender) </h3>
            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='https://docs.google.com/document/d/1SddUjjI2NvlxgAKbH1fJQSMH5_rAqRBfb3EM6LtQ9BI/edit?usp=sharing' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align:center;">
                無法顯示請前往 google
                <a href="https://docs.google.com/document/d/1SddUjjI2NvlxgAKbH1fJQSMH5_rAqRBfb3EM6LtQ9BI/edit?usp=sharing" target="_blank" class="badge badge-primary" >
                  查看文件
                </a>
              </p>

            </div>
          </div>
        </div>

      </div>








    </div>

  </div>


  <!-- *****bottom button***** -->
  <div 
    v-if = "status == 0"
    class="overlay text-white text-center"
    style="
      margin-bottom:50px;
    ">
    <a 
      @click="go('workwall')"
      class="btn btn-lg btn-primary" 
      href="javascript:void(0)">其他作品
    </a>
  </div>



  <Contact></Contact>
</main>
</template>

<script>

import Nav from "@/components/SelfNav.vue";
import Contact from "@/components/SelfContact.vue";
import $ from 'jquery';

export default {
  name: "Product",
  components: {
    Nav,
    Contact,
  },


  data() {
    return {
      view_type: "working",
      status: this.$route.query.q,
    };
  },

  created(){
    //var jQuery = require("jquery");

    let str_q =  this.$route.query.q;
    if((typeof str_q) == 'undefined'){
      //str_q = "0";
      this.status = 0;
    }else{

      var q = parseInt(str_q);
      this.status = q;

      /*
      if(q != 1 || q != 2 || q != 3 || q != 4){
        this.status = 0;
      }
      */

      


      //.header
      //$(".header").css('background', 'url(../assets/resume/happy_fish.jpg)');
    }

    
    console.log("qqqq header->" + $(".header"));

    console.log("qqqq->" + q + (typeof q) );
    console.log("qqqq->" + this.status);
  },


  mounted() {
    this.$nextTick(() => {

      let q =  this.$route.query.q
      console.log("q->" + q);


      //$(".header").css('background', "url('../assets/imgs/happy_fish_scene.png') no-repeat center center fixed");

      //'~@/assets/image.png'
      //console.log("qqqq header->" + $(".header").css() );

    });
  },


  methods: {
    chang_status(id) {
      this.status = id;
    },

    go(str) {
      this.$router.push(str);
    },

  },
};
</script>



<style scoped>


  .testmonial-card .testmonial-body:after {
    width: none;
    height: none;
    border-style: none;
    background: none;
  }


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
    padding: 20px 0;
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
    color: #ff214f;
}








.gt {
    color: #ff214f;
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
    top: -80px;
    left: 50%;
    margin-left: -1px;
    width: 3px;
    height: 3000px;
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
    width: 100%;
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
    display: inline-table;
    width: calc(50% - 45px);
    margin: 20px 15px;
    padding: 20px;
    color: #b7b7b7;
    text-decoration: none;
    line-height: 18px;
    font-weight: 300;
    border-top: 5px solid #ff214f;
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
    /*
    margin-left: 45px;
    */
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





