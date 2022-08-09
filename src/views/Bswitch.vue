<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('bswitchTitle')"
    ></login-header>

    <div class="v-content__wrap">
      <div class="main-container">
        <div class="container mb-4">
          <div class="row text-center mt-3">
            <div class="col-6 col-md-3">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <p class="text-secondary small">{{ $t("bswitchBasic") }}</p>
                  <h5 class="mt-3 mb-0 font-weight-normal text-success">
                    {{ user_wallet }} 
                    {{$t('coinType')}}
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <p class="text-secondary small">
                    {{ $t("bswitchPromotion") }}
                  </p>
                  <h5 class="mt-3 mb-0 font-weight-normal text-success">
                    {{ user_promotion }}
                    {{$t('coinType')}}
                  </h5>
                </div>
              </div>
            </div>
          </div>



          <div class="form-group">
            <div> 
              {{ $t("bswitchGetLimit") }}

              <span class="text-success"> 
                {{ today_coin }} / {{out_limit}} 
                {{ $t("coinType") }}
              </span>
            </div>

          </div>
          <div class="form-group">

            <input
              type="number"
              :placeholder="$t('bswitchConverted')"
              v-model="converted_num"
              class="form-control"
            />

          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="security_password"
              :placeholder="$t('bswitchPassword')"
              autocomplete="off"
              class="form-control"
            />
          </div>
        </div>
        <div class="container text-center">
          <button
            @click="submitConverted()"
            class="btn btn-default mb-2 mx-auto rounded w-100"
          >
            {{ $t("bswitchConfirm") }}
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
//import { apiConverted } from "@/api/api";

export default {
  name: "Bswitch",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      is_show_recharge: 1,
      is_received: 1,
      user_wallet: 0,
      user_promotion: 0,
      converted_num: "",
      security_password: "",


      // tttt
      today_coin : 0, 
      out_limit : 0 
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.get_user_info();
    });
  },
  methods: {
    show_recharge() {
      this.is_show_recharge = 2;
    },
    jump() {
      this.$router.path("/tradelist"); //返回上一层
    },



    get_user_info() {
      var self = this;
      
      this.$mixapi.call("user/promotion_exchange_prepare", {}, function(res) {
        if (res.code == 0) {
          self.user_wallet = res.data.basic_credit;
          self.user_promotion = res.data.promotion_credit;

          self.out_limit = res.data.withdraw_basic_limit;
          self.today_coin = res.data.today_withdraw_basic;
        }
      });

    },

    submitConverted() {
      var data = {
        amount: this.converted_num,
        security_password: this.security_password,
      }
      var self = this;

      this.$mixapi.call("user/promotion_exchange", data, function(res) {

        console.log("promotion_exchange: " + JSON.stringify(res));

        if(res.code != 0) {

          self.$layer.msg( res.reason == '金額數量錯誤'  ? self.$t(res.reason) : res.reason);

          return;
        }

        self.$router.push({path: "/promtion_exchange_log", query: {q: res.data.id}});
      });

      /*
      let data={
      converted_num: this.converted_num,
      security_password: this.security_password,
      }
      apiConverted(data).then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.user_wallet = res.info.basic_trx;
          this.user_promotion = res.info.promotion_trx;
        } else {
          this.$layer.msg(this.$t(res.msg));
        }
      });
      */

    },
  },
};
</script>
