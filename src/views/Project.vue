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
              <img src="../assets/resume/messageImage_1614656930650.jpg" class="rounded-0 card-img-top mg-responsive">
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
            <h3 class="testmonial-title">遊戲場景</h3>
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
            <h3 class="testmonial-title">材質的選擇</h3>
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

            <h3 class="testmonial-title">統整</h3>
            <h6 class="testmonial-subtitle"> Unify project </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                單元測試後(並與專案經理確認後)，整合各項環節，將各個部件串連起來，確認遊戲最後呈現效果與遊戲流程。
              </p>
              <div style="text-align:left; margin-bottom:15px;">
                <li> 豐富海底元素(假魚、岩石、海草) </li>
                <li> 增加海底特效(氣泡、煙霧) </li>
                <li> 原有spine在Unity中效果 </li>
                <li> 美術spine怎麼給格式 </li>
                <li> 加入音效 </li>
              </div>


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
            <h3 class="testmonial-title">影片處理</h3>
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
                <img src="../assets/resume/t004.jpg" style="width:100%;" />
              </div>
              <span> 這部分需去背並轉換透明格式(AE處理+轉檔) </span>


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



        <div class="col-md-6 my-3 my-md-0">
          <div class="testmonial-card">
            <h3 class="testmonial-title">模擬場景</h3>
            <h6 class="testmonial-subtitle">Demo Scene</h6>

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
            <h3 class="testmonial-title">材質的選擇</h3>
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
            <h6 class="testmonial-subtitle">Demo Scene</h6>

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

            <h3 class="testmonial-title">統整</h3>
            <h6 class="testmonial-subtitle"> Unify project </h6>
            <div class="testmonial-body">

              <p style="text-align: left;">
                單元測試後(並與專案經理確認後)，整合各項環節，將各個部件串連起來，確認遊戲最後呈現效果與遊戲流程。
              </p>
              <div style="text-align:left; margin-bottom:15px;">
                <li> 豐富海底元素(假魚、岩石、海草) </li>
                <li> 增加海底特效(氣泡、煙霧) </li>
                <li> 原有spine在Unity中效果 </li>
                <li> 美術spine怎麼給格式 </li>
                <li> 加入音效 </li>
              </div>


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
                    個人覺得比較可惜的事，影片中素材沒有附上對應的聲音檔，最後影片整體上會更自然、更有趣，不會有一種在看默劇的感覺。
                    <br/>
                    <br/>
                    活動執行當天，我們是人員親到現場錄影操作，花費不少的成本。
                    可衍伸做成自動拍攝的機台效益較大，需要營造一個私密空間，玩家才好放開拍攝，
                    類似於主題活動50元拍照機概念。
                </div>
            </div>

            <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
              
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





