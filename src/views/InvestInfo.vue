<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('mineInfo')"
    ></login-header>




    <div class="glonalmain">
      <div class="joinProduct">
        <div class="usertop">
          <div class="usertopdiv">
            <div class="blanceword">
              <h1>
                {{ qdata.name }}

                ({{productId }})
              </h1>
            </div>
          </div>
        </div>


        <div class="van-cell-group van-hairline--top-bottom">

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('mineType') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>
                {{ mineType }}
              </span>
            </div>
          </div>


          <div class="van-cell" style="color:red;">
            <div class="van-cell__title">
              <span> {{ $t('minePrice') }} </span>
            </div>
            
            <div class="van-cell__value">
              <span> {{ qdata.buy_price }}  </span>
            </div>
          </div>


          <div class="van-cell">
            <div class="van-cell__title">
              <span> {{ $t('mineProfit') }} </span>
            </div>
            
            <div class="van-cell__value">
              <span> {{ qdata.produced_profit }} </span>
            </div>
          </div>


          <div class="van-cell">
            <div class="van-cell__title">
              <span> {{ $t('mineTotalProfit') }} </span>
            </div>
            
            <div class="van-cell__value">
              <span> {{ qdata.total_profit }} </span>
            </div>
          </div>







          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('mineSt') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>
                {{ qdata.start_time }}
              </span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span> {{ $t('mineEt') }} </span>
            </div>
            <div class="van-cell__value">
              <span> {{ qdata.end_time }} </span>
            </div>
          </div>


        </div>
        <form class="van-form">




          <div class="joincalcdiv">
            <button
              type="button"
              @click="submitMining()"
              class="
                van-button
                van-button--danger
                van-button--normal
                van-button--block
                van-button--round
              "
            >
              <div class="van-button__content">
                <span class="van-button__text">
                 {{ $t('buyOk') }}
                </span>
              </div>
            </button>
          </div>











        </form>
      </div>
    </div>
    <bottom-button></bottom-button>
  </main>
</template>
<script>
import LoginHeader from "@/components/LoginHeader.vue";
import BottomButton from "@/components/BottomButton.vue";
export default {
  name: "InvestInfo",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      qdata: "",
      mineType: "None",
      productId: "None",
    };
  },
  created() {},

  mounted() {
    this.$nextTick(() => {
      //this.get_mining_buy_ok();
      this.get_info();
    });
  },



  methods: {
    get_info() {
    //get_mining_buy_ok() {
      var self = this;
      this.$mixapi.call("mining/info", {'qid': this.$route.query.qid}, function(res) {
        console.log( "getInfo res= " + JSON.stringify(res));
        self.qdata = res.data;


        if (res.data.state_desc == "run"){
          self.mineType = self.$t('invesTypeRun');
        }else{
          self.mineType = self.$t('invesTypeEnd');
        }
        self.productId=res.data.id;

      });
    },

    submitMining() {
      this.$router.push("/investlist");
      //this.$router.push("/home");
    },


  },
};
</script>



<style  scoped>
</style>
