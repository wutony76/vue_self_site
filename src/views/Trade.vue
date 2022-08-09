<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header show_back='2' show_h5='2' 
     :title="$t('tradeTitle')"
    >
    </login-header>

    <div class="bodydiv">
      <div class="container mt-3 mb-4 text-center">
        <h2 class="ztcolor">+ 6.00%</h2>
      </div>
      <div class="solgen">{{$t('tradeCloud')}}</div>
      <div class="line"></div>
      <div class="main3con">
        <div class="banner">
          <img src="../assets/mobile/img/banner3.png" />
        </div>
        <div class="title">
          <table width="100%">
            <tr>
              <td width="70%">
              <!--
                <div class="tradecolor1">{{$t('tradeProfit')}}</div>
                <div class="tradecolor2">{{$t('tradeHour')}}</div>
                -->
              </td>
              <td width="30%" align="right">
              <!--
                <a  @click="jump()" href="javascript:void(0)" class="viewall">
                  {{$t('tradeView')}}<img
                    src="../assets/mobile/img/174.png"
                /></a>
                -->
              </td>
            </tr>
          </table>
        </div>

        <div class="profit">
          <div class="profitlist" v-for='(item,index) in trading_list' v-bind:key="index">
            <div class="profitlistL">
              <img src="../assets/mobile/img/119.png" />
            </div>
            <div class="profitlistM">
              <h2><span>{{item.amount}}</span> TRX</h2>
              <p>{{$t('tradeQuan')}}</p>
            </div>
            <a v-if="item.state==1"  href="javascript:void(0)" class="Received">{{item.state==1?$t('tradeReceived'):$t('tradeReceive')}}</a>
            <a v-if="item.state==0" @click="addEarnings(item.id,index)" href="javascript:void(0)" class="Receive">{{item.state==1?$t('tradeReceived'):$t('tradeReceive')}}</a>
          </div>
        </div>


      </div>
    </div>
     <bottom-button></bottom-button>
  </main>
</template>
<script>
// @ is an alias to /src
import BottomButton from '@/components/BottomButton.vue'
import LoginHeader from '@/components/LoginHeader.vue'
import { apiTradeList,apiAddEarnings} from "@/api/api";

export default {
  name: "Home",
  components: {
    BottomButton,
    LoginHeader
  },
  data(){
    return{
      is_show_recharge:1,
      trading_list:[]
    }
  },
  created(){},
  mounted(){
    this.$nextTick(()=>{
        this.trading_profit();
    })
  },
  methods:{
    show_recharge(){
      this.is_show_recharge=2
    },
    jump(){
         this.$router.push("/tradelist");
    },
    trading_profit(){
      apiTradeList().then((res)=>{
           console.log(res); 
           if(res.status==1){ 
              this.trading_list=res.info;
           }else{
             this.$layer.msg(res.msg)
           }
      })
    },
    addEarnings(id,key){
        apiAddEarnings({id:id}).then((res)=>{
          console.log(res);
          this.trading_list[key].state=1;
        })
    }
  }
};
</script>
<style scoped>

</style>
