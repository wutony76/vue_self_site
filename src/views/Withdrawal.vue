<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('withdrawalTitle')"
    ></login-header>


    <div class="v-content__wrap">
      <div class="main-container">
        <div class="container mb-4">
          <p class="text-center text-secondary mb-1">
            {{ $t("withdrawalBasic") }}
          </p>
          <p class="text-center text-secondary mb-1 cred">
            {{ $t("withdrawalHour") }}
          </p>

          <div class="form-group mb-1">
            <input
              type="text"
              v-model="withdrawal"
              placeholder="00.00"
              readonly="readonly"
              class="form-control large-gift-card"
            />
          </div>

          <div calass="text-center text-secondary mb-4">
            <div>
              {{ walletTypeTitle }}
              <!--
              {{ qdata.total_recharge_basic }}
              -->
              {{ rechargeCredit }}
              {{ $t("coinType") }}
            </div>

            <div>
              {{ $t("withdrawalDailyCount") }}
              <span class="text-success">
                {{ qdata.today_withdraw_count }} / {{out_count_limit}} 
                {{ $t("dailyCount") }}
              </span>
            </div>

            <div>
              {{ $t("withdrawalDaily") }}
              <span class="text-success"> 
                {{ today_withdraw }} / {{out_limit}} 
                {{ $t("coinType") }}
              </span>
            </div>
          </div>
          
          <div class="form-group">
            <select
              class="form-control selecter"
              @change="notify_change()"
              v-model="type"
            >
            <!--
              <option v-bind:value="1">{{ $t("withdrawalAccount") }}</option>
            -->
              <option v-bind:value="2">{{ $t("withdrawalPromotion") }}</option>
            </select>
          </div>

          <div class="form-group">
            <input
              type="number"
              placeholder="金额 0.1-1000000"
              v-model="amount"
              @blur="change_amount()"
              class="form-control"
            />
            <span class="cred">&nbsp;&nbsp;
                {{ $t("withdrawalFee") }}: {{ fee }} usdt，{{
                $t("withdrawalTo")
              }}
              {{ to_account }}
            </span>
          </div>
          <div class="form-group">
            
            <textarea
              :placeholder="$t('withdrawalWith')"
              v-model="address"
              class="form-control"
            ></textarea>
            <!--
            <input
              type="text"
              v-model="address"
              :placeholder="$t('withdrawalWith')"
              class="form-control"
            />
            -->
          </div>

          <div class="form-group">
            <input
              type="password"
              v-model="password"
              :placeholder="$t('withdrawalEnter')"
              autocomplete="off"
              class="form-control"
            />
          </div>
          <!---->
        </div>
        <div class="container text-center">
          <button
            @click="submitWithdrawal()"
            class="btn btn-default mb-2 mx-auto rounded w-100"
          >
            {{ $t("withdrawalConfirm") }}
          </button>
        </div>
        <div class="container mb-4">
          <div class="card">
            <div class="card-body px-0">
              <ul class="list-group list-group-flush"></ul>
            </div>
          </div>
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

export default {

  name: "Withdrawal",
  components: {
    BottomButton,
    LoginHeader,
  },


  data() {
    return {
      qdata: {},
      user_wallet: 0,
      user_promotion: 0,
      withdrawal: 0,
      type: 2,
      withdrawal_fee: 0,
      amount: "",
      fee: 0,
      to_account: 0,
      password: "",
      address: "",

      today_withdraw: 0,
      out_count_limit: 0,
      
      // ttt add
      out_limit: 0.0,
      walletTypeTitle:"",
      rechargeCredit:0,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.get_user_info();
      //this.getFee();
    });
  },
  methods: {

    get_user_info() {

      var self = this;
      this.$mixapi.call("user/withdraw_prepare", {}, function(res) {
        console.log( "ahui withdraw_prepare = " + JSON.stringify(res) );

        if (res.code != 0){
          self.$layer.msg(res.reason);
          return;
        }

        self.qdata = res.data;
        self.loadSize(self);

      });
    },
    
    notify_change() {
      this.loadSize(this);
    },

    loadSize(self) {
      //console.log(self);
      //console.log("loadSize: " + this.type);
      //console.log("ttt: " + JSON.stringify(self.qdata));

      this.withdrawal_fee = self.qdata.withdraw_fee;
      this.change_amount();

      /*
      if (this.type == 1) {
        this.withdrawal = self.qdata.basic_credit;
        //console.log("ttt1: " + self.qdata.today_withdraw_basic_trx);

        this.out_limit = self.qdata.withdraw_basic_limit;
        this.out_count_limit = self.qdata.withdraw_basic_count_limit;
        this.today_withdraw = self.qdata.today_withdraw_basic;
        this.today_withdraw_count = self.qdata.today_withdraw_basic_count;
        
        this.walletTypeTitle = this.$t("withdrawalBasicUSDT"); 
        this.rechargeCredit = self.qdata.total_recharge_basic;

      } else {
      */

        this.withdrawal = self.qdata.promotion_credit;
        //console.log("ttt2: " + self.qdata.promotion_trx);

        this.out_limit = "-";
        this.out_count_limit = "-";
        this.today_withdraw = self.qdata.today_withdraw_promotion
        this.today_withdraw_count = self.qdata.today_withdraw_promotion_count

        this.walletTypeTitle = this.$t("withdrawalPromotionUSDT"); 
        this.rechargeCredit = self.qdata.promotion_credit;
//      }

      //console.log("ttt: " + this.withdrawal);
    },

    change_amount() {
      //改成固定usdt
      //this.fee = (this.amount * this.withdrawal_fee) / 100;
      this.fee = this.qdata.withdrawal_fee;
      this.to_account = this.amount - this.fee;
      if(this.to_account < 0) {
        this.to_account = 0;
      }

    },



    submitWithdrawal() {
      let data = {
        amount: this.amount,
        type: this.type,
        password: this.password,
        address: this.address,
      };

      console.log( "ttt data =" + JSON.stringify(data) );
      var self = this;


      this.$mixapi.call("user/withdraw", data, function(res) {
        console.log( "user_withdraw res=" + JSON.stringify(res) );

        if (res.code != 0) {
          self.$layer.msg(res.reason);
          return;
        }

        //self.$layer.msg(self.$t(res.msg));
        //window.location.href = res.url;
        self.$router.push({path: "/withdrawlog", query: {q: res.data.req_id}});
      });
    },

  },
};
</script>

<style scoped>
</style>
