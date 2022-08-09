<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('buyTitle')"
    ></login-header>

    <div class="glonalmain">
      <div class="joinProduct">
        <div class="usertop">
          <div class="usertopdiv">
            <div class="blanceword">
              <h1>
                {{ $t('buyTypeSuccess') }}
              </h1>
            </div>
          </div>
        </div>

        <div class="van-cell-group van-hairline--top-bottom">

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyTime') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>{{ qdata.time_desc }}</span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyName') }}
              
              </span>
            </div>
            <div class="van-cell__value">
              <span>{{ qdata.name }}</span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyPrice') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>{{ qdata.price }} 
              
               {{ $t('coinType') }}
              </span>
            </div>
          </div>
          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyBalance') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>
               {{ qdata.balance }}
               
               {{ $t('coinType') }}
               ({{ $t('bswitchPromotion') }})
               
              </span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyCycle') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>
              
                {{ qdata.days }}

                {{ $t('invesDay') }}
              
              </span>
            </div>
          </div>
          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{ $t('buyRate') }}
              </span>
            </div>
            <div class="van-cell__value">
              <span>
              {{ qdata.day_rebate_desc }}
              
               {{ $t('coinType') }}
              </span>
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
  name: "Investpro",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      qdata: "",
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.get_mining_buy_ok();
    });
  },
  methods: {
    get_mining_buy_ok() {
      
      var self = this;

      this.$mixapi.call("mining/buy_ok", {'qid': this.$route.query.qid}, function(res) {
        console.log( "getMiningPrepare res= " + JSON.stringify(res));
        self.qdata = res.data;
      });
    
    },
    submitMining() {

       //this.$router.push("/home");
       this.$router.push("/investlist");

    },
  },
};
</script>
<style  scoped>
</style>
