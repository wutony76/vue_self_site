<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('shareTitle')"
    ></login-header>
    <div class="bodydiv">
      <div class="solgen">{{ $t("shareInvite") }}</div>
      <p class="friends">{{ $t("shareEarn") }}</p>
      <div id="qrcode" ref="qrcode" class="ewm"></div>
      <div class="main3con bg4">
        <div class="line">&nbsp;</div>
        <div class="phone">
          <img src="../assets/mobile/img/phone.png" />
        </div>
        <h2 class="refer">{{ $t("shareRefer") }}</h2>
        <p class="refertip">
          {{ $t("shareReferal") }}
        </p>
        <div class="copytxt">
          <table width="100%">
            <tr>
              <td class="copytxt1">
                {{ qdata.share_url }}
              </td>
              <td width="100px">
                <div class="icodebtn" @click="copy('131231313123')">
                  {{ $t("shareLink") }}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <bottom-button></bottom-button>
  </main>
</template>
<script>
// @ is an alias to /src
import BottomButton from "@/components/BottomButton.vue";
import LoginHeader from "@/components/LoginHeader.vue";
import QRCode from "qrcodejs2";
//import { apiShareInfo } from "@/api/api";

export default {
  name: "Share",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      copy_text: "",
      qdata: {},
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getShareInfo();
    });
  },
  methods: {
    copy() {

      var domUrl = document.createElement("input");
      domUrl.value = this.qdata.share_url;
      domUrl.id = "creatDom";
      document.body.appendChild(domUrl);
      domUrl.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      let creatDom = document.getElementById("creatDom");
      creatDom.parentNode.removeChild(creatDom);
      this.$layer.msg( this.$t('copySuccess') );
    },
    getShareInfo() {
      var self = this;
      
      this.$mixapi.call("user/get_share", {}, function(res) {
        console.log("get_share res=" + JSON.stringify(res));
        self.qdata = res.data;
        self.$nextTick(() => {
          self.qrcode();
        });

      });
    },
    qrcode() {
      this.$refs.qrcode.innerHTML = "";
      let url = this.qdata.share_url;
      new QRCode("qrcode", {
        width: 180,
        height: 180,
        text: url,
      });
    },
  },
};
</script>
<style scoped>
</style>
