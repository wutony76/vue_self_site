<template>
  <div class="nav">
    <a @click="jump('home')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='home'}]">
      <div>
        <img v-if="bottonStr=='home'" src="../assets/lynx/b_b1_sel.png" />
        <img v-if="bottonStr!='home'" src="../assets/lynx/b_b1.png" />
      </div>
      <div>資產</div>
    </a>


    <a @click="jump('trans_in')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='trans_in'}]">
      <div>
        <img v-if="bottonStr=='trans_in'" src="../assets/lynx/b_b3_sel.png" />
        <img v-if="bottonStr!='trans_in'" src="../assets/lynx/b_b3.png" />
      </div>
      <div>收款</div>
    </a>



    <a @click="jump('bank')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='bank'}]">
      <div>
        <img v-if="bottonStr=='bank'" src="../assets/lynx/b_b4_sel.png" />
        <img v-if="bottonStr!='bank'" src="../assets/lynx/b_b4.png" />
      </div>
      <div>帳務</div>
    </a>



    <!--
    <a @click="jump('trade')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='trade'}]"
      ><div>
          <img v-if="bottonStr=='trade'" src="../assets/mobile/img/micon2-sel.png" />
          <img v-if="bottonStr!='trade'" src="../assets/mobile/img/micon2.png" />
      </div>
      <div>{{ $t("bottomTrading") }}</div>
    </a>
    -->

    <!--
    <a @click="jump('investlist')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='investlist'}]"
      ><div>
           <img v-if="bottonStr=='investlist'" src="../assets/mobile/img/micon5-sel.png" />
          <img v-if="bottonStr!='investlist'" src="../assets/mobile/img/micon5.png" />
      </div>
      <div>閃兌</div>
    </a>
    -->

    <!--
    <a @click="jump('share')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='share'}]"
      ><div>
         <img v-if="bottonStr=='share'" src="../assets/mobile/img/micon3-sel.png" />
          <img v-if="bottonStr!='share'" src="../assets/mobile/img/micon3.png" />
      </div>
      <div>{{ $t("bottomShare") }}</div>
    </a>
    -->

    <a @click="jump('my')" href="javascript:void(0)" :class="['nav1',{'active':bottonStr=='my'}]">
      <div>
         <img v-if="bottonStr=='my'" src="../assets/lynx/b_b2_sel.png" />
          <img v-if="bottonStr!='my'" src="../assets/lynx/b_b2.png" />
      </div>
      <div>{{ $t("bottomMine") }}</div>
    </a>


  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  name: "BottomButton",
  data() {
    return {
      bottonStr:'home',
    };
  },
  computed: {},
  mounted(){
    this.bottonStr = Cookies.get('bottonStr')?Cookies.get('bottonStr'):'home';
  },
  methods: {
    jump(str) {
      this.$store.dispatch("app/setButton", str);
      this.$router.push(str);
    },
  },
};
</script>




<style scoped>


.nav {
  background: #0e2f56;
  padding-top: 10px;
  padding-bottom: 2px;

  box-shadow: 0px 0px 30px 15px #0a94c961;
}

.nav a{
  color:#ececda;
  border-right: 2px solid var(--main_btn_color);
}

.nav .active
{
  color: var(--select_ft_color);
}

.nav a:last-child{  
  border-right: none;
}



</style>

