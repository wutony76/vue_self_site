<template>
<main class="commonbg main has-footer">

  <Nav
    :_type = "view_type"
  >
  </Nav>

  <!-- status 0  -->
  <div 
    v-if = "status == 0 "
    id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
    <h2 class="section-title py-5">專案介紹</h2>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
        <div class="row">

          <div 
            @click="chang_status(1)"
            class="col-md-4">
            <div class="card bg-transparent border my-3 my-md-0">
              <img src="../assets/resume/happy_fish.jpg" class="rounded-0 card-img-top mg-responsive">
              <div class="card-body">
                  <!--
                      <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$5</a></h1>
                      -->

                <h4 class="pt20 pb20"> 3D歡樂捕魚 
                    <span class="badge badge-primary" >
                        AR
                    </span>
                </h4>
                <p class="text-white">3D歡樂捕魚，結合AR經由不同辨識圖進入不同漁場，與好友一同捕捉稀有魚種吧!</p>
              </div>
            </div>
          </div>

          <div 
            @click="chang_status(2)"
            class="col-md-4">
              <div class="card bg-transparent border my-3 my-md-0">
                <img src="../assets/resume/1618211143346.jpg" 
                class="rounded-0 card-img-top mg-responsive">
                <div class="card-body">
                  <!-- 
                      <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$12</a></h1>
                      -->
                  <h4 class="pt20 pb20">虛擬攝影棚
                      <span class="badge badge-primary" >
                          AR
                      </span></h4>
                  <p class="text-white">
                      和自己心儀的女孩，紀錄心動的一瞬間，擁有自己專屬的影片。</p>
                </div>
              </div>
          </div>

          <div 
            @click="chang_status(3)"
            class="col-md-4">
            <div class="card bg-transparent border my-3 my-md-0">

               <img src="assets/imgs/proj_scratch.jpg" 
                class="rounded-0 card-img-top mg-responsive">

              <div class="card-body">
                <h4 class="pt20 pb20">刮刮樂
                    <span class="badge badge-primary" >
                        休閒
                    </span></h4>
                <p class="text-white">
                    花50元買一張刮刮樂，就可以擁有一夜致富得機會。
                </p>
              </div>
            </div>
          </div>


          <div 
            @click="chang_status(4)"
            class="col-md-4"
            style=" margin-top: 2rem;"
            >
            <div class="card bg-transparent border my-3 my-md-0"
            >
              <img src="../assets/resume/c2c.jpg" class="rounded-0 card-img-top mg-responsive">
              <div class="card-body">
                <h4 class="pt20 pb20">C2C遊戲(玩家&玩家)
                    <span class="badge badge-primary" >
                        休閒
                    </span></h4>
                <p class="text-white">
                  主打真實玩家和真實玩家的一起遊戲，有什麼遊戲是比跟自己好朋友玩更好玩。
                </p>
              </div>
            </div>
          </div>

          <div 
            @click="chang_status(5)"
            class="col-md-4"
            style=" margin-top: 2rem;"
            >
            <div class="card bg-transparent border my-3 my-md-0"
            >
              <img src="assets/imgs/proj_slot.jpg" class="rounded-0 card-img-top mg-responsive">
              <div class="card-body">
                <h4 class="pt20 pb20">女神拉霸機
                    <span class="badge badge-primary" >
                        休閒
                    </span></h4>
                <p class="text-white">
                  女神主題系列的拉霸機，擁有許多彩蛋，等著您來發現。
                </p>
              </div>
            </div>
          </div>


          <div 
            @click="chang_status(6)"
            class="col-md-4"
            style=" margin-top: 2rem;"
            >
            <div class="card bg-transparent border my-3 my-md-0"
            >
              <img src="assets/imgs/proj_ar.png" class="rounded-0 card-img-top mg-responsive">
              <div class="card-body">
                <h4 class="pt20 pb20">AR應用專案
                    <span class="badge badge-primary" >
                        團樂
                    </span></h4>
                <p class="text-white">
                  使用AR技術，大家一起同樂。
                </p>
              </div>
            </div>
          </div>


          <div 
            @click="chang_status(7)"
            class="col-md-4"
            style=" margin-top: 2rem;"
            >
            <div class="card bg-transparent border my-3 my-md-0"
            >
              <img src="assets/imgs/proj_creator.jpg" class="rounded-0 card-img-top mg-responsive">
              <div class="card-body">
                <h4 class="pt20 pb20">Creator應用專案
                    <span class="badge badge-primary" >
                      綜合
                    </span></h4>

                <p class="text-white">
                  H5的相關應用
                </p>
              </div>
            </div>
          </div>









        </div>
      </div>


    </div>
  </div>

  <!-- status 1  -->
  <div
    v-else-if = "status == 1 "
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/happy_fish_scene.png') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> 3D歡樂捕魚 </h1>
        <h2 class="display-4 mb-5"> Unity應用 &amp; 休閒遊戲 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>

    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/happy_fish2.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">

              <!--
              <h2 class="mb-4"> 介紹 </h2>
              -->

              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                公司中，在寶馬188娛樂平台，有一款傳統的歡樂補魚遊戲；在我入職後團隊再這個基礎上，對遊戲增加了更多的可玩性和豐富性。
              </p>
              <li>增加了NPC，使玩家更需要注重團隊配合。</li>
              <li>增加了魚潮的種類，豐富補魚遊戲的可玩性。</li>
              <li>增加了複雜度魚潮，玩家必須尋找特定的攻略，才能獲取更大的收益。</li>
              <br/>
              <p>
                在客戶端不是公司自己開發情況下，遊戲的數據，無法做有效精準的控制，也無法加入更多的遊戲元素；專案經理決定嘗試開發新版的歡樂補魚遊戲，尚未有明確的任務指示下，需要進行專案經理的構想嘗試。
              </p>

              <div style="
                text-align: center;
                ">
                <img src="../assets/resume/fish01.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/fish02.jpg" style="width:45%;"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>


    <!-- step1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">

        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">STEP1. 遊戲場景</h3>
            <h6 class="testmonial-subtitle"> Scene </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                經過一些簡單場景測試後，決定選用海底的場景(光線可以穿透)不很深的那種，因為覺得這個光影可以模擬的話，將會是一個效果很不錯的地方。
              </p>

              <div style="
                ">
                <img src="../assets/resume/f001.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/f002.jpg" style="width:45%;"/>
              </div>

              <span> 參考圖取自網路 </span>


              <p style="text-align: left; margin-top: 1rem">
                -初步搭建-
                <br/>
                霧霾效果-在水下看東西有一種朦朦朧朧的感覺。
              </p>

              <div style="
                ">
                <img src="../assets/resume/f003.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/f004.jpg" style="width:45%;"/>
              </div>
              <span> 朦朦朧朧 </span>

              <div style="
                ">
                <img src="../assets/resume/f005.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/f006.jpg" style="width:45%;"/>
              </div>
              <span> 物件遠近感 </span>

              <br/>

              <p style="text-align: left; margin-top: 1rem">
                -水波光影實現-
                <br/>
                焦散效果-產生水波纹的光影效果，使用projector來實現。
              </p>

              <div style="
                ">
                <img src="../assets/resume/f007.jpg" style="width:90%;"/>
              </div>


              



            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">模擬場景</h3>
            <h6 class="testmonial-subtitle">Test Scene</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/u_juN-PRLNo' frameborder='0' allowfullscreen
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
                投影水波光影在魚物件上效果
              </p>


              <p style="text-align:left; margin-top: 1rem; margin-bottom: 0px;">
                參考資料
              </p>
              <div style="text-align:left;">
                <li>http://www.manew.com/thread-48162-1-1.html	</li>
                <li>https://download.csdn.net/download/lzh00000/10311302?utm_source=bbsseo</li>
                <li>https://alastaira.wordpress.com/2014/10/07/underwater-effects/</li>
                <li>https://catlikecoding.com/unity/tutorials/flow/looking-through-water/</li>
                <li>https://github.com/Unity-Technologies/VolumetricLighting</li>
                <li>https://alastaira.wordpress.com/2014/10/07/underwater-effects/</li>
                <li>https://github.com/muckSponge/Optically-Realistic-Water</li>
              </div>
              

              
            </div>

          </div>
        </div>

      </div>
    </div>


    <!-- step2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">


        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">STEP2. 材質的選擇</h3>
            <h6 class="testmonial-subtitle"> Fish </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                使用簡易場景，放入不同質感的魚，供專案經理決定合適不合適。
              </p>

              <div style="
                ">
                <img src="../assets/resume/f008.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/f009.jpg" style="width:45%;"/>
              </div>
              <div style="margin-top:10px;">
                <img src="../assets/resume/f010.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/f011.jpg" style="width:45%;"/>
              </div>

              <span> 參考圖取自網路 </span>

            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">模擬場景</h3>
            <h6 class="testmonial-subtitle">Test Scene</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="

                  width: 45%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 25%;
                  height: 0;
                  overflow: hidden;

                  margin-right:10px;
                ">
                
                <iframe src='https://www.youtube.com/embed/pnTWeUVmIfQ' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <div class='embed-container'
                style="
                  width: 45%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 25%;
                  height: 0;
                  overflow: hidden;
                ">
                
                <iframe src='https://www.youtube.com/embed/kqa9FNdkATs' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align: center;">
                Q版魚 & 實體魚
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- step3  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">
        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">

            <h3 class="testmonial-title"> STEP3. 調整</h3>
            <h6 class="testmonial-subtitle"> Tools </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                單元測試後(並與專案經理確認後)，整合各項環節，將各個部件串連起來，確認遊戲最後呈現效果與遊戲流程。
              </p>
              


               <div style="
                ">
                <img src="../assets/resume/f012.jpg" style="width:90%;"/>
              </div>
              <span> 整體搭建結果 </span>


              <div style="
                ">
                <img src="../assets/resume/f013.jpg" style="width:90%;"/>
              </div>
              <span> 遊戲流程 </span>



            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">遊戲展示</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/2k5QwNqVaPM' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align: center;">
                遊戲結果展示
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    
    <div id="work" class="work-content">
      <div class="stepsmainblock" id="steps">
        <div class="wrap">

          <div class="stepsline">
            <div class="stepslinewrap">

                <div class="stepsblock stepsblockfull" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                  <h4>後續</h4>
                    現階段開發到這樣，基本就可以提供給專案經理評估。與後端串接後，可直上遊戲平台。
                  <br/>
                  <br/>
                    -擴增方向-
                  <br/>
                  <li> 增加連線模組 </li>
                  <li> 與後端串接( 出魚量，魚潮 ) </li>
                  <li> 不同辨識圖，出現不同魚場 </li>
                  <li> 資源DLC </li>
                  <li> 王怪 </li>
                  <li> 收集功能 </li>
                  <li> 成就系統 </li>
                  <li> 技能 </li>
                  <li> 換氣 </li>
                  <li> 魚攻擊 </li>

                </div>
            </div>

            <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
              
            </div>
          </div>

        </div>
      </div>
    </div>

    



  </div>

  <!-- status 2  -->
  <div
    v-else-if = "status == 2 "
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/room_bg2.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> 虛擬攝影棚 </h1>
        <h2 class="display-4 mb-5"> Unity應用 &amp; 虛擬實境 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>

    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/room_bg.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                公司與日本pierrot經紀公司合作，我們在TRE展中提供AR應用的技術支援與相關活動的規劃。整體規劃中<b style="color:#ff214f;">虛擬攝影棚</b>專案由我負責。
              </p>
              <!--
              <div style="
                text-align: center;
                ">
                <img src="../assets/resume/fish01.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/fish02.jpg" style="width:45%;"/>
              </div>
              -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 規劃  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items"
      style="
        margin-top: 55px;
      ">
      <h3 class="section-title "
          style="text-align: center;"
        >規劃</h3>

      <div class="row mt-3 mb-5">
        
        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <!--
            <h3 class="testmonial-title">遊戲場景</h3>
            <h6 class="testmonial-subtitle"> Scene </h6>
            -->
            <div class="testmonial-body">
              <p style="text-align: left; margin-top: 1rem">
                攝影棚說起來就是要拍攝影片，目的是想把預錄好的素材影片，與現場真實錄影機真實錄的影片合成在一起。
              </p>

              <div style="
                ">
                <img src="../assets/resume/t001.jpg" style="width:100%;"/>
                <span>
                  處理示意圖
                </span>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <!--
            <h3 class="testmonial-title">遊戲場景</h3>
            <h6 class="testmonial-subtitle"> Scene </h6>
            -->
            <div class="testmonial-body">
              <p style="text-align: left; margin-top: 1rem">
                必須將素材影片，除主角以外的部分除去，變成一支有透明背景的影片檔，再逐一對照場景在合理的地方加上陰影；因為素材影片是預錄好的，如果直接就和實際錄影機錄下的畫面合成，會有一種突兀的違和感。
              </p>

              <div style="
                ">
                <img src="../assets/resume/t002.jpg" style="width:100%;"/>
                <span>
                  直接合成
                </span>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <!--
            <h3 class="testmonial-title">遊戲場景</h3>
            <h6 class="testmonial-subtitle"> Scene </h6>
            -->
            <div class="testmonial-body">
              <p style="text-align: left; margin-top: 1rem">
                如果需要好一點的效果，這個問題必須好好正視，因此想了一個對應的方案，在素材影片與錄影機錄像，不同比例的降影片飽和度，在最後合成輸出的時候再整體提高飽和度。
              </p>

              <div style="
                ">
                <img src="../assets/resume/t003.jpg" style="width:100%;"/>
                <span>
                  在細節上仔細處理後合成
                </span>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>

    <!-- step1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">STEP1. 影片處理</h3>
            <h6 class="testmonial-subtitle"> Movie </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                預錄好的影片需要合成，就必須轉成透明格式影片，經過一連串的測試我是選用.webm影片格式。
                <b style="color:#ff214f;">
                  WebM的壓縮比MP4小得多，而且格式支援透明的通道。
                </b>
                這樣的情況下，就方便技術人員，可以用一般的設備(2~3萬PC)做開發。
                影片品質上我就分不大出來是否相較其他格式，是否有太大的區別。
              </p>

              <div style="
                ">
                <img src="../assets/resume/t004.jpg" style="width:90%;" />
              </div>
              <span> 這部分需去背並轉換透明格式(AE處理+轉檔) </span>


              <div style="
                text-align: center;
                ">
                <img src="../assets/resume/t005.jpg" style="width:45%; margin-right:10px;"/>
                <img src="../assets/resume/t006.jpg" style="width:45%;"/>
              </div>
              <span> 原始影片示意圖&去背影片示意圖  </span>

            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">模擬</h3>
            <h6 class="testmonial-subtitle">Test</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/-krC5umDMVg' frameborder='0' allowfullscreen
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
                透明影片測試記錄(編號:-krC5umDMVg)
              </p>


              <p style="text-align:left; margin-top: 1rem; margin-bottom: 0px;">
                參考資料
              </p>
              <div style="text-align:left;">
                <li>https://blog.csdn.net/yuyingwin/article/details/80561517	</li>

                <li>
                https://medium.com/@pofu.lu/unity-transparent-video-%E7%94%A8-videoplayer-%E6%88%96-avpro-%E6%92%AD%E6%94%BE%E9%80%8F%E6%98%8E%E5%BD%B1%E7%89%87-83b4b6b4aefd	</li>
                
                <li>
                  https://jayjustice1945.blogspot.com/2016/03/unitycunity.html
                  <b style="color:#ff214f;">使用 MovieTexture  -行動設備無法</b></li>

                <li>https://blog.csdn.net/u010019717/article/details/73414698 
                  <b style="color:#ff214f;">手機alpha webm可用, vp8視頻設定</b></li>

              </div>
              

              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- step2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">
        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">STEP2. 影片處理2</h3>
            <h6 class="testmonial-subtitle"> Movie </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                為了方便開發與影片的後製，必須對預錄的影片製訂規格。如果廠商提供了上一部類型有複雜背景的影片，將必須花費更多的時間在處理影片上。
              </p>

              <div style="">
                <img src="../assets/resume/t007.jpg" style="width:90%;"/>
              </div>
              <span> 複雜背景的影片 </span>

              <div style="">
                <img src="../assets/resume/t008.jpg" style="width:90%;"/>
              </div>
              <span>  綠幕影片 | 參考圖取自網路 </span>

            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">測試</h3>
            <h6 class="testmonial-subtitle">Test</h6>


            <div class="testmonial-body">

              <p class="" style="
                  padding-top: 10px !important;
                  color:#ff214f;
                "> 
                *展示影片內容有皮膚裸露、熱舞，建議滿18歲以上觀看*
              </p>

              <div class='embed-container'
                style="

                  width: 45%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 25%;
                  height: 0;
                  overflow: hidden;

                  margin-right:10px;
                ">
                
                <iframe src='https://www.youtube.com/embed/6u2sgMDHJx0' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <div class='embed-container'
                style="
                  width: 45%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 25%;
                  height: 0;
                  overflow: hidden;
                ">
                
                <iframe src='https://www.youtube.com/embed/CUtiCuCIiEw' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <p style="text-align: center;">
                測試影片(測試資料取自網路) | 轉Webm測試記錄(編號:CUtiCuCIiEw)
              </p>



              <div class='embed-container'
                style="
                  width: 90%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                ">
                
                <iframe src='https://www.youtube.com/embed/HGDSI8qik3s' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align: center;">
                模擬測試影片(編號:HGDSI8qik3s)
              </p>

            </div>


          </div>
        </div>
      </div>
    </div>


    <!-- step3  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">
        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">

            <h3 class="testmonial-title">STEP3. 擴增工具</h3>
            <h6 class="testmonial-subtitle"> Tools </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                主要的功能完成後，還需要一些工具，讓最後的影片完成度更高、更細緻。
              </p>

               <div style="
                ">
                <img src="../assets/resume/t009.jpg" style="width:90%;"/>
              </div>
              <span> 影片調整工具 </span>


              <div style="
                ">
                <img src="../assets/resume/t010.jpg" style="width:90%;"/>
              </div>
              <span> 玩家定位參考線 </span>



            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">工具展示</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">

              <p class="" style="
                  padding-top: 10px !important;
                "> 
                *顏色經過現場環境調整後，可以儲存，下次開啟會自動載入設定*
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/9nNxH8vtrlE' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>

              <p style="text-align: center;">
                補助工具功能(編號:9nNxH8vtrlE)
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

     <!-- DEMO  -->
    <div id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
        <h2 class="section-title ">TRE攝影棚宣傳</h2>
        <p class="py-5" style="
          padding-top: 10px !important;
          color:#ff214f;
        "> 
          *展示影片內容有皮膚裸露、熱舞、餵食水果...等，建議滿18歲以上觀看*
        </p>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">

            <div class="row">

              <div class="col-md-4">
                <div 
                  class="card bg-transparent border my-3 my-md-0">


                  <div class="testmonial-body">
                    <div class='embed-container'
                      style="
                        position: relative; 
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      ">
                      
                      <iframe src='https://www.youtube.com/embed/ZZCkfS3mOAI' frameborder='0' allowfullscreen
                      style="
                        position: absolute;
                        top: 0; 
                        left: 0; 
                        width: 100%; 
                        height: 100%;
                      "
                      ></iframe>
                    </div>

                    <p style="text-align: center;">
                      椎名空&高橋聖子
                    </p>
                  </div>

                  <!--  
                  <div class="card-body"></div>
                  -->
                </div>
              </div>

              <div class="col-md-4">
                <div 
                  class="card bg-transparent border my-3 my-md-0">


                  <div class="testmonial-body">
                    <div class='embed-container'
                      style="
                        position: relative; 
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      ">
                      
                      <iframe src='https://www.youtube.com/embed/E7zj9Jkpo6g' frameborder='0' allowfullscreen
                      style="
                        position: absolute;
                        top: 0; 
                        left: 0; 
                        width: 100%; 
                        height: 100%;
                      "
                      ></iframe>
                    </div>

                    <p style="text-align: center;">
                      櫻美雪&櫻美雪
                    </p>
                  </div>

                  <!--  
                  <div class="card-body"></div>
                  -->
                </div>
              </div>

              <div class="col-md-4">
                <div 
                  class="card bg-transparent border my-3 my-md-0">


                  <div class="testmonial-body">
                    <div class='embed-container'
                      style="
                        position: relative; 
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      ">
                      
                      <iframe src='https://www.youtube.com/embed/Ko2-9eBg3iI' frameborder='0' allowfullscreen
                      style="
                        position: absolute;
                        top: 0; 
                        left: 0; 
                        width: 100%; 
                        height: 100%;
                      "
                      ></iframe>
                    </div>

                    <p style="text-align: center;">
                      夏木安妮&湘澤南
                    </p>
                  </div>

                  <!--  
                  <div class="card-body"></div>
                  -->
                </div>
              </div>
            </div>


            <div class="row"
              style="
                margin-top:45px;
              ">

              <div class="col-md-4">
                <div 
                  class="card bg-transparent border my-3 my-md-0">


                  <div class="testmonial-body">
                    <div class='embed-container'
                      style="
                        position: relative; 
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      ">
                      
                      <iframe src='https://www.youtube.com/embed/Jg3B7eYoNYc' frameborder='0' allowfullscreen
                      style="
                        position: absolute;
                        top: 0; 
                        left: 0; 
                        width: 100%; 
                        height: 100%;
                      "
                      ></iframe>
                    </div>

                    <p style="text-align: center;">
                      夏木安妮&夏木安妮
                    </p>
                  </div>

                  <!--  
                  <div class="card-body"></div>
                  -->
                </div>
              </div>

              <div class="col-md-4">
                <div 
                  class="card bg-transparent border my-3 my-md-0">


                  <div class="testmonial-body">
                    <div class='embed-container'
                      style="
                        position: relative; 
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      ">
                      
                      <iframe src='https://www.youtube.com/embed/rxqWyZzz9BE' frameborder='0' allowfullscreen
                      style="
                        position: absolute;
                        top: 0; 
                        left: 0; 
                        width: 100%; 
                        height: 100%;
                      "
                      ></iframe>
                    </div>

                    <p style="text-align: center;">
                      櫻美雪&椎名空
                    </p>
                  </div>

                  <!--  
                  <div class="card-body"></div>
                  -->
                </div>
              </div>

            </div>
          </div>


        </div>
    </div>





    



  </div>


  <!-- status 3  -->
  <div
    v-else-if = "status == 3"
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/proj_scratch.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> 刮刮樂 </h1>
        <h2 class="display-4 mb-5"> Creator &amp; 休閒 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>



    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/proj_scratch.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                Aceking女神娛樂城中，刮刮樂遊戲，我主要負責，小遊戲共用模組開發與平台的串接、相關的測試、維護(刮刮樂數據模擬)。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- slot1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="margin-top: 3rem;" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">刮刮樂</h3>
            <h6 class="testmonial-subtitle">Scratch</h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                <b style="color:#ff214f;">
                  刮刮樂
                </b>提供即時性的樂趣，玩家可立即且輕易地得知自己是否中獎與中獎金額，並以遊戲多樣化取勝。

              </p>
              <div style="">
                <img src="../assets/resume/Scratch00.png" style="width:90%;" />
              </div>
              <span> 遊戲畫面 </span>

              <div style="">
                <img src="../assets/resume/Scratch01.png" style="width:90%;" />
              </div>
              <span> 遊戲畫面 </span>


            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">

              <div style="">
                <img src="../assets/resume/Scratch02.jpg" style="width:90%;" />
              </div>
              <span> 遊戲畫面 </span>

              <div style="">
                <img src="../assets/resume/Scratch03.png" style="width:90%;" />
              </div>
              <span> 遊戲畫面 </span>
              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- slot2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">機率數據模擬</h3>
            <h6 class="testmonial-subtitle"> Data</h6>
            <div class="testmonial-body">
              
              <p style="text-align:left;">
                玩法1：刮出金鼠、銀鼠或銅鼠，即得該獎金。
                <br/>
                玩法2： 任一個「您的手牌號碼」大小介於左右兩個「對手手牌號碼」之間，即得該號碼對應獎金。<br/>
                玩法3：刮出一個金額，即得該獎金。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model01' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 龍門一路發 </span>

              <p style="text-align:left; margin-top:2rem;">
                玩法1：任一個「您的號碼」對中「幸運號碼」，即得該號碼對應獎金；或刮出一個紅包符號，即得紅包下方對應獎金。
                <br/>
                玩法2：紅包皆可刮出一個金額即得該獎金。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model02' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 紅包任你刮 </span>


              <p style="text-align:left; margin-top:2rem;">
                刮開任一局，若「您的猜拳」勝過「對手猜拳」，即得該局對應的獎金(不可跨列對獎)，若平手，則該局可得對應獎金的一半。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model03' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 賞你錢錢拳 </span>



              <p style="text-align:left; margin-top:2rem;">
                玩法1：任一個您的號碼對中幸運號碼，即得該號碼對應獎金。
                <br/>
                玩法2：刮出一個金額，即得該獎金。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model04' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 鈔票數不完 </span>


            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">試算</h3>
            <h6 class="testmonial-subtitle">Test</h6>

            <div class="testmonial-body">

              <p style="text-align:left; margin-top:2rem;">
                玩法1：任一個「您的麻將」對中「對手麻將」，即得該符號對應獎金。<br/>
                玩法2：刮出3個相同的點數，即得對應獎金。
                <br/>
                玩法3：若刮出中發白，即得1,000元
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model05' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 胡胡胡翻天 </span>


              <p style="text-align:left; margin-top:2rem;">
                任一個「您的符號」對中「幸運符號」，即得該符號對應獎金。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model06' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 閃亮十二星 </span>


              <p style="text-align:left; margin-top:2rem;">
                玩法1：任一局「主隊分數」高於「客隊分數」，即得該局對應獎金。
                <br/>
                玩法2：於各個壘包區刮出一個球的符號，即得該符號對應獎金。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model08' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 金獎一擊棒 </span>

              
              <p style="text-align:left; margin-top:2rem;">
                玩法1：任一個「您的號碼」對中「幸運號碼」，即得該號碼對應獎金。
                <br/>
                玩法2：若刮中特別號「8」，即得獎金300元。
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                  background: #fff;
                ">
                
                <iframe src='http://3.38.112.103:18053/avscratch_model09' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                "
                ></iframe>
              </div>
              <span> 樂透水金球 </span>

              

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- status 4  -->
  <div
    v-else-if = "status == 4"
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/proj_c2c.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> C2C遊戲 </h1>
        <h2 class="display-4 mb-5"> Creator &amp; C2C </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>


    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/proj_c2c_main.jpg') no-repeat center center;
          "
        >
        <!-- 
        <img src="assets/imgs/proj_c2c_main.jpg" style="width:100%;" />
        -->

        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                跟NPC玩遊戲好玩，還是跟朋友玩遊戲好玩呢?我們製作了數款精典遊戲供各位玩家挑選。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- c2c1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="margin-top: 3rem;" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">C2C1. 終極密碼 </h3>
            <h6 class="testmonial-subtitle"> Guess number </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                <b style="color:#ff214f;">
                  終極密碼
                </b>
                 先選擇1-999中一個數字，相互猜，先猜中的人勝利。
              </p>
              <div style="">
                <img src="../assets/resume/c2c01.jpg" style="width:90%;" />
              </div>
              <span> 終極密碼 </span>
            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/cfIfaVl3mLg' frameborder='0' allowfullscreen
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
                終極密碼實機記錄(編號:cfIfaVl3mLg)
              </p>
              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- c2c2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">C2C2. 吹牛 </h3>
            <h6 class="testmonial-subtitle"> Boast </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                
                <b style="color:#ff214f;">
                  吹牛
                </b>必須猜中自己和對方綜合的點數，真真假假的鬥智遊戲。

              </p>
              <div style="">
                <img src="../assets/resume/c2c02.jpg" style="width:90%;" />
              </div>
              <span> 吹牛 </span>
            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/-tgO5hx6SV4' frameborder='0' allowfullscreen
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
                吹牛實機記錄(編號:-tgO5hx6SV4)
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>

     <!-- c2c3  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">C2C3. 足球對決 </h3>
            <h6 class="testmonial-subtitle"> Soccer </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                
                <b style="color:#ff214f;">
                  足球對決
                </b>玩家在足球場上進行PK對決！

              </p>
              <div style="">
                <img src="../assets/resume/c2c03.jpg" style="width:90%;" />
              </div>
              <span> 足球對決 </span>
            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/KGY1dgFlHvU' frameborder='0' allowfullscreen
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
                足球對決實機記錄(編號:KGY1dgFlHvU)
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/V-jzYOztdow' frameborder='0' allowfullscreen
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
                藍隊&紅隊&觀眾端 足球對決實機記錄(編號:V-jzYOztdow)
              </p>



            </div>

          </div>
        </div>
      </div>
    </div>



  </div>

  <!-- status 5  -->
  <div
    v-else-if = "status == 5 "
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/proj_slot.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> 女神拉霸機 </h1>
        <h2 class="display-4 mb-5"> Creator &amp; 休閒博弈 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>

    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/proj_slot_main.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                Aceking女神娛樂城中，女神拉霸機系列遊戲，我主要負責，拉霸機遊戲共用模組開發與平台的串接、相關的測試、維護(機率彩金數據模擬)。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- slot1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="margin-top: 3rem;" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">Slot1. 三上悠亞 </h3>
            <h6 class="testmonial-subtitle"> Yua Mikami </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                三上悠亞拉霸機
                <b style="color:#ff214f;">
                  維納斯女神的秘密
                </b>、
                <b style="color:#ff214f;">
                  甜心空服員
                </b>
              </p>
              <div style="">
                <img src="../assets/resume/slot01.jpg" style="width:90%;" />
              </div>
              <span> 三上悠亞拉霸機 </span>
            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/P1gNNH2s9JQ' frameborder='0' allowfullscreen
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
                實機01記錄(編號:P1gNNH2s9JQ)
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/JIyc2ht1s5k' frameborder='0' allowfullscreen
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
                心動模式實機記錄(編號:JIyc2ht1s5k)
              </p>


              


              <p style="text-align:left; margin-top: 1rem; margin-bottom: 0px;">
                觀看更多
              </p>
              <div style="text-align:left;">
                <li> 實機01 https://youtu.be/P1gNNH2s9JQ	</li>
                <li> 實機02 https://youtu.be/lEnaTfr71DE	</li>
                <li> 實機03 https://youtu.be/j4G6009IKRM	</li>
                <li> 心動模式 https://youtu.be/JIyc2ht1s5k	</li>
                <li> Freespin https://youtu.be/yEVSQXgwJdg	</li>
              </div>
              

              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- slot2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">Slot2. 夏木安梨 </h3>
            <h6 class="testmonial-subtitle"> Anri Natuki </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                夏木安梨拉霸機
                <b style="color:#ff214f;">
                  戀愛事務所
                </b>、
                <b style="color:#ff214f;">
                  暴風雨之夜
                </b>
              </p>
              <div style="">
                <img src="../assets/resume/slot02.jpg" style="width:90%;" />
              </div>
              <span> 夏木安梨拉霸機 </span>
            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/bxIrZXC0rYI' frameborder='0' allowfullscreen
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
                實機01記錄(編號:bxIrZXC0rYI)
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/OhozI66w1go' frameborder='0' allowfullscreen
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
                心動模式實機記錄(編號:OhozI66w1go)
              </p>


              


              <p style="text-align:left; margin-top: 1rem; margin-bottom: 0px;">
                觀看更多
              </p>
              <div style="text-align:left;">
                <li> 實機01 https://youtu.be/bxIrZXC0rYI	</li>
                <li> 心動模式 https://youtu.be/OhozI66w1go	</li>
                <li> Freespin https://youtu.be/_WdnEQYdQ3s	</li>
                <li> Sexywin https://youtu.be/bAp8VGXXDus	</li>
                <li> 小遊戲 https://youtu.be/foTPHyo-ico	</li>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- slot3  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">Slot3. 高橋聖子 </h3>
            <h6 class="testmonial-subtitle"> Shoko Takahashi </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                高橋聖子拉霸機
                <b style="color:#ff214f;">
                  南國海灘度假
                </b>、
                <b style="color:#ff214f;">
                  夏之花火祭
                </b>
              </p>
              <div style="">
                <img src="../assets/resume/slot03.jpg" style="width:90%;" />
              </div>
              <span> 高橋聖子拉霸機 </span>
            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/DR2tmuK8DuQ' frameborder='0' allowfullscreen
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
                實機01記錄(編號:DR2tmuK8DuQ)
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/s6nL5HnFwvI' frameborder='0' allowfullscreen
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
                心動模式實機記錄(編號:s6nL5HnFwvI)
              </p>


              


              <p style="text-align:left; margin-top: 1rem; margin-bottom: 0px;">
                觀看更多
              </p>
              <div style="text-align:left;">
                <li> 實機01 https://youtu.be/DR2tmuK8DuQ	</li>
                <li> 心動模式 https://youtu.be/s6nL5HnFwvI	</li>
                <li> Freespin https://youtu.be/Kicb9NufTvk	</li>
                <li> 女神彩池 https://youtu.be/CdITPZRl6aY	</li>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- slot4  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">Slot4. 相澤南 </h3>
            <h6 class="testmonial-subtitle"> Shoko Takahashi </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                相澤南拉霸機
                <b style="color:#ff214f;">
                  專屬女僕
                </b>
              </p>
              <div style="">
                <img src="../assets/resume/slot04.jpg" style="width:90%;" />
              </div>
              <span> 相澤南拉霸機 </span>
            </div>
          </div>
        </div>

      </div>
    </div>


     <!-- Game model -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title"> 共用模組 </h3>
            <h6 class="testmonial-subtitle"> Mini Game </h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                女神拉霸機有一定的機率會觸發小遊戲
                <b style="color:#ff214f;">
                  打屁股
                </b>、
                <b style="color:#ff214f;">
                  野球拳
                </b>
              </p>
              <div style="">
                <img src="../assets/resume/slot05.jpg" style="width:90%;" />
              </div>
              <span> 打屁股 (連擊次數越高獎勵越多)</span>

              <div style="">
                <img src="../assets/resume/slot06.jpg" style="width:90%;" />
              </div>
              <span> 野球拳 (連過5關可以獲得高獎勵) </span>


            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/foTPHyo-ico' frameborder='0' allowfullscreen
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
                實機記錄(編號:foTPHyo-ico)
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/CdITPZRl6aY' frameborder='0' allowfullscreen
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
               女神彩池實機記錄(編號:CdITPZRl6aY)
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- DEMO  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <div class="row mt-3 mb-5">
        <div class="col-md-4 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">機率數據模擬</h3>
            <h6 class="testmonial-subtitle"> Data </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                3X3SLOT 機率數據模擬 
              </p>

              <div style="">
                <img src="../assets/resume/slot07.jpg" style="width:90%;"/>
              </div>
              <span> 數據模擬示意圖 </span>

            </div>
          </div>
        </div>

        <div class="col-md-8 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">測試</h3>
            <h6 class="testmonial-subtitle">Test</h6>


            <div class="testmonial-body">
              <p data-v-55fa6d4f="" style="padding-top: 10px !important;"> *點擊試算產生隨機結果 3X3* </p>


              <div class='embed-container'
                style="
                  width: 90%;
                  display: inline-block;

                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                ">
                
                <iframe src='http://3.38.112.103:18060/' frameborder='0' allowfullscreen
                style="
                  position: absolute;
                  top: 0; 
                  left: 0; 
                  width: 100%; 
                  height: 100%;
                  background: #fff;
                "
                ></iframe>
              </div>

              <p style="text-align: center;">
                隨機遊戲結果機率數據模擬
              </p>

            </div>


          </div>
        </div>
      </div>
    </div>

  </div>


  <!-- status 6  -->
  <div
    v-else-if = "status == 6"
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/proj_ar.png') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> AR應用專案 </h1>
        <h2 class="display-4 mb-5"> Unity &amp; 多人同樂 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>

    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/proj_ar.png') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                AR的研究與開發，使用Unity+Vuforia，加入不同的元素和主題，為大家帶來快樂。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- slot1  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="margin-top: 3rem;" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">天降元寶</h3>
            <h6 class="testmonial-subtitle"> Money</h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                <b style="color:#ff214f;">
                  天降元寶
                </b> 在一段的時間內打到多少元寶，將同比例換成獎金。
              </p>

              <div style="">
                <img src="../assets/resume/ar001.jpg" style="width:90%;" />
              </div>
              <span> 天降元寶 </span>


            


            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/hzvHm7gJDYI' frameborder='0' allowfullscreen
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
                實機記錄(編號:hzvHm7gJDYI)
              </p>
              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- slot2  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">打年獸 </h3>
            <h6 class="testmonial-subtitle"> Fried Nian Beast</h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                <b style="color:#ff214f;">
                  打年獸
                </b> 年獸擊殺後，最高擊殺%前三可獲得獎金。
              </p>

              <div style="">
                <img src="../assets/resume/ar002.jpg" style="width:90%;" />
              </div>
              <span> 打年獸 </span>


            </div>
          </div>
        </div>



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/hJs34Xnj09Y' frameborder='0' allowfullscreen
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
                實機記錄(編號:hJs34Xnj09Y)
              </p>


            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- slot3  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">哆啦A夢 </h3>
            <h6 class="testmonial-subtitle"> ドラえもん </h6>
            <div class="testmonial-body">


               <p style="text-align: left;">
                <b style="color:#ff214f;">
                  哆啦A夢
                </b> 為日本漫畫家藤子·F·不二雄筆下著名的兒童、科幻類型日本漫畫
              </p>

              <div style="">
                <img src="../assets/resume/ar003.jpg" style="width:90%;" />
              </div>
              <span> 哆啦A夢 </span>

            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/lLLY5dJ-q3U' frameborder='0' allowfullscreen
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
                AR拍照版記錄(編號:lLLY5dJ-q3U)
              </p>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/vNDV8_u4DzY' frameborder='0' allowfullscreen
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
                實機記錄(編號:vNDV8_u4DzY)
              </p>
              
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>


  <!-- status 7  -->
  <div
    v-else-if = "status == 7"
  >
    <!-- header -->
    <header id="home" 
      class="header"

      style="
        background:url('../assets/imgs/proj_creator.jpg') no-repeat center center fixed;
      "
    >
      <div class="overlay text-white text-center">
        <h1 class="display-2 font-weight-bold my-3"> Creator應用專案 </h1>
        <h2 class="display-4 mb-5"> Creator &amp; 多方應用 </h2>
        <a 
          @click="chang_status(0)"
          class="btn btn-lg btn-primary" 
          href="javascript:void(0)">返回專案
        </a>

      </div>
    </header>

    <!--  About Section  -->
    <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
      <div class="row">
        <div 
          class="col-lg-6 has-img-bg"
          style="
            background:url('../assets/imgs/proj_creator.jpg') no-repeat center center;
          "
        >
        </div>

        <div class="col-lg-6">
          <div class="row justify-content-center">
            <div class="col-sm-8 py-5 my-5">
              <h4 class="mb-4" style="font-weight:bold;"> 開發背景 </h4>
              <p>
                Creator引擎是在王族遊戲公司，為主要使用的工具之一，我們應用在許多地方上，比較多的還是用在H5遊戲的開發上。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 活動  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="margin-top: 3rem;" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">活動大螢幕</h3>
            <h6 class="testmonial-subtitle"> Screen</h6>
            <div class="testmonial-body">
              <p style="text-align: left;">
                <b style="color:#ff214f;">
                  活動大螢幕
                </b> ，在舉辦活動時我們做了這個螢幕觀眾端，這個不只單單是簡單的螢幕
                ，還串連了我們的活動APP、主持人、遊戲、觀眾，整個進程都是以這個為主。
              </p>

              <div style="">
                <img src="assets/imgs/proj_creator.jpg" style="width:90%;" />
              </div>
              <span> 活動大螢幕 </span>

            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">
              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/Vp1Ow2txH9o' frameborder='0' allowfullscreen
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
                螢幕端記錄(編號:Vp1Ow2txH9o)
              </p>

              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/4A-gvXYiaZo' frameborder='0' allowfullscreen
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
                AR團體活動記錄(編號:4A-gvXYiaZo)
              </p>


              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- Game  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">棋牌類、機台類遊戲 </h3>
            <h6 class="testmonial-subtitle"> Game</h6>
            <div class="testmonial-body">

              <p style="text-align: left;">

             
              <div style="">
                <img src="../assets/resume/188G03.jpg" style="width:90%;" />
              </div>
              <span> 機台類 </span>
              <div style="">
                <img src="../assets/resume/188_slot1.jpg" style="width:90%;" />
              </div>
              <div style="">
                <img src="../assets/resume/188_slot2.jpg" style="width:90%;" />
              </div>
              <div style="">
                <img src="../assets/resume/188_slot3.jpg" style="width:90%;" />
              </div>
              <span> Slot機台 </span>

            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">實機</h3>
            <h6 class="testmonial-subtitle">Demo</h6>

            <div class="testmonial-body">

              <div style="">
                <img src="../assets/resume/188G01.jpg" style="width:90%;" />
              </div>
              <span> 棋牌類 </span>
              <div style="">
                <img src="../assets/resume/188G02.jpg" style="width:90%;" />
              </div>
              <span> 棋牌類 </span>


              <div class='embed-container'
                style="
                  position: relative; 
                  padding-bottom: 56.25%;
                  height: 0;
                  overflow: hidden;
                  max-width: 100%;
                ">
                
                <iframe src='https://www.youtube.com/embed/V_54uvht5AM' frameborder='0' allowfullscreen
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
                德州撲克實機記錄(編號:V_54uvht5AM)
              </p>


            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- 5 coin  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">五元奪寶 </h3>
            <h6 class="testmonial-subtitle"> 彩票制 </h6>
            <div class="testmonial-body">

              <div style="">
                <img src="../assets/resume/creator01.jpg" style="width:90%;" />
              </div>
              <span> 彩票制 </span>
              <div style="">
                <img src="../assets/resume/creator01.jpg" style="width:90%;" />
              </div>
              <span> 開獎 </span>

            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">五元奪寶</h3>
            <h6 class="testmonial-subtitle">競標制</h6>

            <div class="testmonial-body">
              <div style="">
                <img src="../assets/resume/creator03.jpg" style="width:90%;" />
              </div>
              <span> 競標制 </span>

              
            </div>

          </div>
        </div>
      </div>
    </div>


    <!-- girl  -->
    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">心動時刻 </h3>
            <h6 class="testmonial-subtitle"> Girl friends </h6>
            <div class="testmonial-body">

               <p style="text-align: left;">
                <b style="color:#ff214f;">
                  心動時刻
                </b> ，一款虛擬女友的角色扮演遊戲，預計結合線上線下的各種相關活動，並串接客服，客服可和玩家聊天遊戲，增加實際嬌女朋友的感覺。
              </p>

              <div style="">
                <img src="../assets/resume/venos01.jpg" style="width:90%;" />
              </div>
              <span> 遊戲流程 </span>
              <div style="">
                <img src="../assets/resume/venos02.jpg" style="width:90%;" />
              </div>
              <span> 介面介紹 </span>
               <div style="">
                <img src="../assets/resume/venos03.jpg" style="width:90%;" />
              </div>
              <span> 戶動聊天 </span>

            </div>
          </div>
        </div>

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">遊戲畫面</h3>
            <h6 class="testmonial-subtitle">Views</h6>

            <div class="testmonial-body">
              <div style="">
                <img src="../assets/resume/venos04.jpg" style="width:90%;" />
              </div>
              <span> 約會 </span>

              <div style="">
                <img src="../assets/resume/venos05.jpg" style="width:90%;" />
              </div>
              <span> 豔遇 </span>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style="" >
      <div class="row mt-3 mb-5">

        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">時時樂 </h3>
            <h6 class="testmonial-subtitle"> Pig </h6>
            <div class="testmonial-body">


              <div style="">
                <img src="../assets/resume/creator04.jpg" style="width:90%;" />
              </div>
              <span> 時時樂 </span>

            </div>
          </div>
        </div>


      </div>
    </div>




  </div>









  <!-- *****bottom button***** -->
  <div 
    v-if = "status != 0"
    class="overlay text-white text-center"
    style="
      margin-bottom:50px;
    ">
    <a 
      @click="chang_status(0)"
      class="btn btn-lg btn-primary" 
      href="javascript:void(0)">返回專案
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
      view_type: "project",
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





