<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('invesProductTitle')"
    ></login-header>

    <div class="glonalmain">
      <div class="joinProduct">
        <div class="usertop">
          <div class="usertopdiv">
            <div class="blanceword">
              <h1></h1>
            </div>
            <p>
              {{$t('invesPromotionAccountBlance')}}
            </p>
            <div class="blance">{{ qdata.promotion_trx }} <span></span></div>
          </div>
        </div>


        <div class="van-cell-group van-hairline--top-bottom">
          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{$t('planPrice')}}
              </span>
            </div>

            <div class="van-cell__value">
              <span>{{ qdata.price }}</span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{$t('planCycle')}}
              </span>
            </div>
            <div class="van-cell__value">
              <span>{{ qdata.days }} {{$t("invesDay")}}</span>
            </div>
          </div>

          <div class="van-cell">
            <div class="van-cell__title">
              <span>
                {{$t('planRebate')}}
              </span>
            </div>
            <div class="van-cell__value">
              <span>{{ qdata.day_rebate_desc }} {{$t("coinType")}}</span>
            </div>
          </div>
        </div>
        <form class="van-form">

          <div class="van-cell van-field">
            <div class="van-cell__title van-field__label">
              <span>
                {{$t('planPrice')}}
              </span>
            </div>
            <div class="van-cell__value van-field__value">
              <div class="van-field__body">
                <strong style="color: #ff0000;">
                {{ qdata.price }}
                </strong>
              </div>
            </div>
          </div>



          <div class="van-cell van-field">
            <div class="van-cell__title van-field__label">
              <span>
                {{$t("withdrawalEnter")}}
              
              </span>
            </div>
            <div class="van-cell__value van-field__value">
              <div class="van-field__body">
                <input
                  maxlength="16"
                  name="AccPassword"
                  regmsg="The password should be 6-16 characters, and letters and numbers can be used"
                  tag=""
                  :placeholder="$t('withdrawalEnter')"
                  required="required"
                  type="password"
                  class="va21"
                  v-model="security_password"
                />
              </div>
            </div>
          </div>
          <div class="joincalcdiv">
            <div class="join_calc">
              {{ qdata.price }} + ({{ qdata.day_rebate_desc }}*{{ qdata.days}}) =  
              {{ qdata.last_money }}
            </div>
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
                <!--
                  Participate in investment
                  -->
                  {{$t("planBuy")}}

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
      security_password: "",
      qdata: "",
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.get_mining_buy_prepare();
    });
  },
  methods: {
    get_mining_buy_prepare() {
      var self = this;
      this.$mixapi.call("mining/buy_prepare", {'product_id': this.$route.query.productId}, function(res) {
        console.log( "getMiningPrepare res= " + JSON.stringify(res));
        self.qdata = res.data;
      });
    
    },
    jump_log(qid) {
      console.log("jump_log qid=" + qid);

    },
    submitMining() {
      if (this.security_password == "") {
        this.$layer.msg(this.$t("securityPasswordNotice"));
        return false;
      }

      var self = this;

      //var url = "http://mix.coincenter-us.com/mining_buy";
      var post_data = {
        pid: this.$route.query.productId,
        security_password: this.security_password,
      };

      //console.log( "getMiningBuy url= " + url + " post=" + JSON.stringify(post_data));


      //this.$http.post(url, post_data).then(function(res) {
      this.$mixapi.call("mining/buy", post_data, function(res) {
        if(res.code != 0) {
          self.$layer.msg(res.reason);
          return false;
        }

        //this.$layer.msg(this.$t(res.msg));
        self.$router.push({
          name: 'InvestproSuccess',
          query: {
            qid: res.qid,
          }
        });


      });

    },
  },
};
</script>
<style  scoped>
</style>
