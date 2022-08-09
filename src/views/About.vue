<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="關於我們"
    >
    </login-header>



    <div class="v-content__wrap">

      <div
        class = "main-box"
      >

        <div
          class = "qr-data"
          style=""
        >
          <h1>
            加密貨幣錢包提供與區塊鏈互動所需要的工具，沒有錢包就無法接收虛擬貨幣。錢包可讓您查看地址上的餘額，並允許您在區塊鏈上轉移資金。加密貨幣錢包並真的「將貨幣放進去」，而是記載公鑰與私鑰的方式來運行。
            公鑰（Public Key）用以生產區塊鏈上的地址，記錄著區塊鏈上一個特定的「位置」，以傳送及接收加密貨幣。地址的所有者可以在區塊鏈上移動資金。
            私鑰（Private Key) 是類似密碼的概念，證明對虛擬資金的所有權及控制權，可以在不同錢包中存取虛擬資金，進行支付時必須使用這個私鑰。 
          </h1>
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
import QRCode from "qrcodejs2";
import Cookies from 'js-cookie'

export default {
  name: "About",
  components: {
    BottomButton,
    LoginHeader
  },
  data(){
    return{
      res_data: {},
      botton_str:"my",
      refresh_key:0,


    }
  },
  created() {
  },

  mounted() {
    this.$nextTick(() => {
      this.load_data();
    });
  },
  
  methods:{
    load_data(){

      let btn_name = Cookies.get('bottonStr');
      console.log("btn_name->" + btn_name);
      if ( btn_name != this.botton_str ){
        Cookies.set('bottonStr', this.botton_str);
        this.refresh_ui();
      }

      var self = this;
      var post_data = {
        item_id: self.$route.query.id,
      }
      this.$mixapi.call("user/trans_in", post_data, function(res){
          console.log("user trans_in data=" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;

          new QRCode("address_qrcode", {
            width: 200,
            height: 200,
            text: res.data.address,
          });
        }
      );
    },
    do_copy() {
      var domUrl = document.createElement("input");
      domUrl.value = this.res_data.address;
      domUrl.id = "creatDom";
      document.body.appendChild(domUrl);
      domUrl.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      let creatDom = document.getElementById("creatDom");
      creatDom.parentNode.removeChild(creatDom);
      this.$layer.msg(this.$t("copySuccess"));
    },


    refresh_ui(){
      this.refresh_key +=1;
    }


  }
};
</script>

<style scoped>
.main-box{
  
  border-radius: 8px 8px 0px 0px;
  padding: 24px 8px 10px 8px;
  min-height: 320px;

  color: var(--main_bg_color);
}


.main-box .qr-data{ 
  text-align: center; 
  margin: 50px 0 20px 0;

  font-weight: 600;
}

.qr-data h1{
  letter-spacing: 10px;

}




.btn-default {
  background-color: var(--btn_normal_color);
  color: var(--main_ft_color);
  border: 1px solid #05182e;
}
.btn-default:hover {
  background-color: var(--btn_hover_color);
  color: var(--main_ft_color);
}


</style>