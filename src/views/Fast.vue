<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="轉換"
    ></login-header>



    <div class="v-content__wrap">

      <div
        style="padding: 0 0 20px 0;"
      >

        <div style="text-align: center; margin: 0 0 20px 0; color: #fff; font-size:20px;">
          掃描二維條碼向我付款
        </div>

      </div>
      

      <div
        class = "main-box"
      >

      <div
          class = "qr-data"
          style=""
        >
          <h1>敬請期待</h1>
        </div>
      
      <!--
        <table width="100%">
            <tr>
              <td align="center">
                我的錢包地址
              </td>
            </tr>
            <tr>
              <td align="center">
                <div id="address_qrcode" ref="qrcode" class="qrcode"></div>
              </td>
            </tr>
        </table>

        
        <div
          class = "qr-data"
          style=""
        >
          {{ res_data.address }}
        </div>


        <div style="text-align: center;">
            <button
              @click="do_copy()"
              type="button"
              id="coplink"
              class="btn btn-default rounded"
            >
              複製收款帳戶
            </button>
        </div>
        -->


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
  name: "Fast",
  components: {
    BottomButton,
    LoginHeader
  },
  data(){
    return{
      res_data: {},
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
      if ( btn_name != "home" ){
        Cookies.set('bottonStr', "home");
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