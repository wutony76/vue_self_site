<template>
<main class="commonbg main has-footer">

  <Nav
    :_type = "view_type"
  >
  </Nav>


	<canvas id="defaultCanvas0" class="p5Canvas" width="2788" height="0" style="width: 1394px; height: 0px;"></canvas>



  <!-- header -->
  <header id="home" class="header"

  style="
    background:url('../assets/imgs/bg1.jpg') no-repeat center center fixed;
  "
  >


    


    <div class="overlay text-white text-center">
      <h1 class="display-2 font-weight-bold my-3"> 吳東霖 </h1>
      <!--
      <h2 class="display-4 mb-5"> 工作經歷 &amp; 專案展示 </h2>
      -->
      <h2 class="display-4 mb-5"> Unity應用 &amp; Android開發 </h2>
      <a class="btn btn-lg btn-primary" href="#work">工作經歷</a>
    </div>
  </header>



  <!--  About Section  -->
  <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
    <div class="row">

      <!--
      <div class="col-lg-6 has-img-bg">
        -->

      <div class="col-lg-4 has-img-bg"
        style="
          background:none;
        ">
        <div class="row justify-content-center">
          <div class="col-sm-8 py-5 my-5">
            <img src="../assets/resume/myhead.jpg" style="width:100%;">

          </div>
        </div>
      </div>


      <div class="col-lg-4">
        <div class="row justify-content-center">
          <div class="col-sm-8 py-5 my-5">

            <h2 class="mb-4"> 個人資料 </h2>
            <p> 中文姓名 | 吳東霖 </p>
            <p> 英文姓名 | Tony Wu </p>
            <p> 性別 | 男 </p>
            <p> E-mail | wutony76@gmail.com </p>
            <p> Line | id:wutony76 </p>
            <p> FB Messenger | https://www.facebook.com/DINO2STUDIO </p>
            <p> 通訊地址 | 台北市信義區松山路*** </p>
            <p> 就業狀態 | 在職中 </p>
            <p> 學歷 | 致理科技大學(資管系畢業) </p>

          </div>
        </div>
      </div>


      <div class="col-lg-4">
        <div class="row justify-content-center">
          <div class="col-sm-8 py-5 my-5">
            <h2 class="mb-4"> 自傳 </h2>

            <p>
            您好，我是吳東霖，來自宜蘭。樂於接收新的知識與創新的想法，喜歡親自動手操作、發想設計，用實際上的行動和數據比空話更有份量。經常在團隊的交流與協調過程中，學習並增進自身的能力；個性穩定，做事細心謹慎，無論是工作或任務指派，都能有效的達成。期望用自己的專業替公司帶來更大的效益。

            <br>
            <br>

            專業能力方面，高職開始學習程式設計與邏輯思考訓練，程式語言從VB、ActionScript、JAVA...等都有一段時間的接觸過，有扎實基礎的編寫程式和解決問題能力；新的技術和開發架構，都可以很快配合並獨立作業。工作至今，除了擔任3D美術，另有豐富的遊戲開發經驗，可以主動擔負相關工作，使任務分工能更有效率。
            
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- REVIEWS Section  -->
  <div id="testmonial" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <h2 class="section-title my-5 text-center">我能做到</h2>
      <div class="row mt-3 mb-5">
          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">研發</h3>
                  <h6 class="testmonial-subtitle">Development </h6>
                  <div class="testmonial-body">
                    <p
                        style="
                            text-align: left;
                        "
                    >
                    當公司有了新的創意發想，須確認該專案是否能繼續執行，會和我們討論初步<b>展示或測試</b>；從美術素材格式、前端技術選用、後端架構規劃，由我們進行實務上的專案進行，與企劃配合是否為公司所需求，制定出可實際執行的方案。
                    </p>
                  </div>
              </div>
          </div>

          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">前端</h3>
                  <h6 class="testmonial-subtitle">Front end</h6>
                  <div class="testmonial-body">
                      <p
                        style="
                            text-align: left;
                        "
                      >
                      根據公司需求開發團隊配合，依企劃開出功能需求，做出指定功能或效果，常用開發引擎都有接觸過，可多方面支援，也可以依需求做出不同系統開發(例如同一組後端API，可以開發出 Android、網頁版、Unity)。
                      </p>
                  </div>
              </div>
          </div>

          <div class="col-md-4 my-3 my-md-0">
              <div class="testmonial-card">
                  <h3 class="testmonial-title">其他</h3>
                  <h6 class="testmonial-subtitle">Other</h6>
                  <div class="testmonial-body">
                      <p
                        style="
                            text-align: left;
                        "
                      >
                      根據工作需求，做出需求的工具或是腳本。自動測試機器人、NPC、爬蟲、流程模擬、批量圖浮水印...等工具，讓工作上流程能更加的順利。
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>





  <div id="work" class="work-content">
    <div class="stepsmainblock" id="steps">
      <div class="wrap">

        <!--
        <div class="dashtop"></div>
        -->
        
        <h2 class=" py-5" 
          style="
            margin-bottom: 0.5rem;
            font-family: 'Oswald', sans-serif;
            /*
            font-weight: 500;
            */
            line-height: 1.2;

            display: block;
    
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            text-align: center;
            font-size: 4rem;
          "
          >
          工作經歷
            <small>
              <span class="gt"> 9 ~ 10年 </span> 工作經驗
            </small>
        </h2>


				<!-- 工作室2 -->
        <div class="stepsline">
          <div class="stepslinewrap">
              <h3 style="font-weight: 600;">
                工作室 
                <span	style="font-size: 12px;">2021/3 ~ 仍在職</span>
              </h3>

              <div class="stepsblock stepsblockfull" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <h4>全端工程師</h4>
                主要做系統開發和運營，以金融投資相關，功能需要大量的數據處理；與資訊的準確度與快速，系統執行穩定度。另有架設遊戲私服(再開發)、購物網站、形象官網、Dapp…等其他專案。
                <br/>
                <br/>
                開發環境，主要用AWS上的VPS(虛擬主機)，作業系統為Centos7並以RPC概念來串接多台VPS架設，達到客戶的需求，主要以<b>Python</b>語言，做數據和流程上的模擬， 並需在網路爬取解析有用可靠訊息。
              </div>
              
              <div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)" style="">
                <h4>負責專案</h4>

                <li>代收&代付金流系統 -<b>php維護</b>  </li>
                <li>金流支付端 -<b>php前端</b>   </li>
                <li>Bt礦機購買系統 -<b>django前端</b>  </li>
                <li>cc投資系統 -<b>Vue前端</b>  </li>
                <li>lynx錢包 -<b>Vue前端</b>   </li>
                <li>量子 DAPP -<b>django前端</b>  </li>
                <li>MT4 GAC -<b>Unity維護</b>  </li>

                <hr/>
                <li>簡訊偵測(自動上分) -<b>Android</b>  </li>
                <li>簡訊偵測(簡訊驗證) -<b>Android</b>  </li>
                <li>cc投資系統 -<b>Android</b>  </li>

                <hr/>

                <li>模擬金流流程 -<b>django</b>  </li>
                <li>自動測試金流 -<b>Python Selenium</b>  </li>
                <li>自動登入做指定測試 -<b>Python Selenium</b>  </li>
                <li>台灣指數股票爬取 -<b>django</b>  </li>
                <li>內部監控平台 -<b>django</b>  </li>
                <li>共用第三方平台 (手機驗證、圖片驗證、Email驗證 .....) -<b>django</b>  </li>
                <li>測試用會員資料建立 -<b>Python</b>  </li>
              </div>

							<div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <h4>技術需求</h4>

                <li> HTML </li>
                <li> CSS  </li>
                <li> JQuery </li>
								<li> Vue </li>
                <li> Django </li>
                <li> python </li>
								<li> Android </li>
								<li> Unity </li>
								<li> AWS </li>
								<li> Linux(Centos7) </li>

								<h4 style="margin-top: 50px;">工作比重</h4>
								<li> 前端50% </li>
								<li> 後端50%  </li>
								
              </div>
          </div>

          <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">
						
          </div>
        </div>

				<!-- 王族遊戲 -->
        <div class="stepsline">
            
            <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

            </div>

            <div class="stepslinewrap stepslinewrapright fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">

                <h3 style="font-weight: 600;">
									王族遊戲
									<span style="font-size: 12px;">
										2018/4 ~ 2021/3
									</span>
                </h3>

                <div class="stepsblock stepsblockfull" 
                    style=""
                    data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                    <h4> 前端遊戲 > 全端開發 </h4>

                    1.傳統休閒博弈遊戲，寶馬188娛樂城H5遊戲的改版，主要針對歡樂捕魚達人與鬥地主。<br/>
                    2.實體桌遊線上遊戲化，休閒博弈遊戲重置改寫。<br/>
                    3.超激娛樂城開發，加入C2C遊戲，對賭雞排機制，可到指定店家兌換雞排。<br/>
                    4.跨域合作AR應用開發，女神娛樂城，主題式系列應用的開發。<br/>
                    <br/>
                    <br/>
                    開發環境，主要用AWS上的VPS(虛擬主機)，作業系統為Centos7並以RPC概念來串接多台VPS架設。前端技術<b>Unity</b>和<b>Android</b>做為App應用開發，H5遊戲用<b>Cocos Creator</b>開發。
                </div>
                
                <div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)"  style="">
                    <h4>負責專案</h4>


                    <li>Ace女神娛樂城-<b>django</b></li>
                    <li>Ace女神娛樂城 -商城-<b>Python</b></li>
                    <li>API黑馬金流串接 Mycard、信用卡、ATM轉帳-<b>Python</b></li>
                    <li>API簡訊串接-<b>Python</b></li>
                    <li>API人人棋牌遊戲串接-<b>Python</b></li>
                    <hr/>
                    <li>虛擬佛像-<b>UnityAR</b></li>
                    <li>歡樂捕魚-<b>UnityAR</b></li>
                    <li>TRE虛擬攝影棚-<b>UnityAR</b></li>
                    <hr/>

                    <li>女優養成-心動時刻-<b>Creator</b></li>
                    <li>女優SLOT遊戲模組-<b>Creator</b></li>
                    <li>刮刮樂遊戲模組-<b>Creator</b></li>
                    <li>德州撲克-<b>Creator</b></li>
                    <li>鬥地主-<b>Creator</b></li>
                    <li>跑得快-<b>Creator</b></li>
                    <li>百家樂-<b>Creator</b></li>
                    <li>龍虎-<b>Creator</b></li>
                    <li>小瑪莉-<b>Creator</b></li>
                    <li>終極密碼-<b>Creator</b></li>
                    <li>吹牛骰盅-<b>Creator</b></li>
                    <li>超雞對決大廳-<b>Creator</b></li>
                    <li>AR舞台螢幕端-<b>Creator</b></li>
                </div>

								<div class="stepsblock fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
									<h4>技術需求</h4>

									<li> Javascript </li>
									<li> Django </li>
									<li> python </li>
									<li> Android </li>
									<li> IOS </li>
									<li> Unity </li>
									<li> Cocos creator </li>
									<li> AWS </li>
									<li> Linux(Centos7) </li>

									<h4 style="margin-top: 50px;">工作比重</h4>
									<li> 前端80% </li>
									<li> 後端20%  </li>

								</div>


                <!--
                <h3>Step #2: Get earnings</h3>
                -->

                <!--
                <div class="stepsblock stepsblockfull">
                    <h4> 前端遊戲 > 全端開發 </h4>
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
                -->
            </div>
        </div>

				<!-- 傳奇遊戲 -->
        <div class="stepsline">
          
          <div class="stepslinewrap fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
            <h3>傳奇遊戲
							<span style="font-size: 12px;">
								2014/7 ~ 2018/4
							</span>
						</h3>
            <div class="stepsblock stepsblockfull" 
            style="
							
            ">
              <h4> 3D美術 </h4>
							依2D設定圖，製做出限定面數3D模型，參與拉普拉斯的神子、星界王冠、精靈樂章、時空契約‧‧‧等專案的3D物件製作。公司非常非常注重3D模型的品質，新人時期一組物件通常重畫修改超過10次以上，就會要求自己更加的細心和觀察，更有耐心的達到該有的品質，慢慢減少重畫修改次數。
							<br/>
              角色設計方面，擅長怪物、動物設計，類寫實韓系風格。
							<br/>
              <br/>
							<li>3D模型建模+UV+貼圖</li>
							<li>3D減面</li>
							<li>3D貼圖重製</li>
							<li>2DICON、UI</li>
							<li>分色</li>
              <br/>
							<br/>

              

            </div>
          </div>
          <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

          </div>
        </div>

				<!--自我精進-->
				<div class="stepsline">
            
            <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

            </div>

            <div class="stepslinewrap stepslinewrapright fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <h3>自我精進
								<span
									style="
											font-size: 12px;
									"
								>
									2013/4 ~ 2014/5
								</span>
								</h3>

                <div class="stepsblock stepsblockfull">
									<h4> 規劃未來方向 </h4>
									1.在補習班學習整體的專案製作與開發過程，並完成2D、3D作品集。
                  <br/>
                  2.並統整思考之前所學所有東西，並考慮自身興趣與未來規劃，決定嘗試美術職務，專心準備作品。

									<br/>
									<br/>
									<li>Android App TheHero橫軸RPG</li>
									<li>The Tank 3d遊戲</li>
									<li>致理技術學院電子書 App</li>
									<li>經緯儀操作概念模擬</li>

                </div>
            </div>
        </div>

				<!--銓鋐數碼資訊-->
        <div class="stepsline">
          
          <div class="stepslinewrap fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
            <h3>銓鋐數碼資訊
							<span
								style="
										font-size: 12px;
								"
							>
								2012/6 ~ 2013/2
							</span>
						</h3>
            <div class="stepsblock stepsblockfull" 
            style="
            ">
              <h4> Android開發 </h4>
							銓鋐數碼資訊是一家傳統的電視台公司，應該是想跨域做數位行銷，因此新創部門數位開發部。
								<br/>
								<br/>
							<li>Yaobah</li>
							<li>暗棋</li>
							<li>Share Apps</li>
            </div>
          </div>
          <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

          </div>
        </div>

				<div class="stepsline">
            
            <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

            </div>

            <div class="stepslinewrap stepslinewrapright fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <h3> BigplanDesign工作室
								<span
									style="
											font-size: 12px;
									"
								>
									2011/8 ~ 2012/6
								</span>
								</h3>

                <div class="stepsblock stepsblockfull">
									<h4> 網頁設計 </h4>
									各類型客製化網頁製作，系統維護
									<br/>
									<br/>
									<li>FunLearn網站的維護(Discord)</li>
									<li>svg小畫家的功能開發(畫矩形工具)</li>
									<li>MiniLover購物官網的前端動態廣告展示</li>
									<li>台大奈米卡牌系列Flash遊戲</li>
									<li>致理技術學院運健系</li>
									<li>新北市欣倫幼兒園官網</li>
                </div>
            </div>
        </div>

        <div class="stepsline">
          <div class="stepslinewrap fromLeftOut" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
            <h3>學生時期
							<span
								style="font-size: 12px;"
							>
								2007/7 ~ 2010/2
							</span>
						</h3>

            <div class="stepsblock stepsblockfull" 
							style="
							">
							大學時期，社團認識了學長開始到學校打工(寫程式)，初步接觸自由和開放原始碼Linux、python、django、blender...等，免費的自由和開放原始碼工具，對往後的技術開發帶來很多的便利，並節省了很多我們學習的成本。

							<br/>
							<br/>
              <li> 致理學生學習歷程檔案網站 </li>
							<li> 決戰1951(戰機遊戲) </li>
							<li> FLASH互動程式研究生論文 </li>
							<li> FunLearn網站的維護(Discord)</li>
            </div>
          </div>
          <div class="stepslinewrap fromRightOut" data-scroll="toggle(.fromRightIn, .fromRightOut)">

          </div>
        </div>

      </div>
    </div>
  </div>







  <!--  gallary Section  -->

  <!--
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
  -->

  <!-- BLOG Section  -->
  <div id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
      <h2 class="section-title py-5">專案介紹</h2>

			<!--
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
			-->

      <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">

                <div class="col-md-4">
									<div 
										@click="project_info(1)"
										class="card bg-transparent border my-3 my-md-0">
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

                <div class="col-md-4">
									<div 
										@click="project_info(2)"
										class="card bg-transparent border my-3 my-md-0">
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

                <div class="col-md-4">
									<div 
										@click="project_info(3)"
										class="card bg-transparent border my-3 my-md-0">
										<img src="assets/imgs/proj_scratch.jpg" class="rounded-0 card-img-top mg-responsive">
										<div class="card-body">
												<!--
														<h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$8</a></h1>
														-->
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

					<!--
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
					-->
      </div>
  </div>

  <!-- REVIEWS Section  -->
  <!--
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
  -->




  <!-- *****bottom button***** -->
  <div 
    v-if = "status != 0"
    class="overlay text-white text-center"
    style="
      margin-bottom:50px;
    ">
    <a 
      @click="go('project')"
      class="btn btn-lg btn-primary" 
      href="javascript:void(0)">更多專案
    </a>
  </div>
  


  <!-- CONTACT Section  -->
	<Contact></Contact>


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
import Contact from "@/components/SelfContact.vue";
//import Cookies from 'js-cookie'

export default {
  name: "Home",
  components: {
		Nav,
		Contact,
  },


  data() {
    return {
      view_type: "home",


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
      //this.get_user_info();
      //this.get_user_items();
    });
  },


  methods: {
    /*
    get_user_info() {
      let btn_name = Cookies.get('bottonStr');
      console.log("btn_name->" + btn_name);
      if ( btn_name != "home" ){
        Cookies.set('bottonStr', "home");
        this.refresh_ui();
      }
      console.log("this->" + this);
      var self = this;

      this.$mixapi.call("user/get_info", {}, function(res) {
        console.log("Home get_user_info res=" + JSON.stringify(res));
        self.my_usdt = res.data.my_usdt;
        self.my_usdt_to_nt = res.data.my_usdt_to_nt;
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
    },
    logout(){  
      Cookies.remove('access_token');
      this.$router.push('/login');//返回上一层
    },
    refresh_ui(){
      this.refresh_key +=1;
    },
    */


    project_info(id) {
      this.$router.push({ path: "/project", query: { q: id } });
    },

    go(str) {
      this.$router.push(str);
    },

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




