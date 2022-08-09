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


          <div class="mb-1">
            <div class="large-gift-card">
              {{$t('recordTitle')}}
            </div>
          </div>

          <table class="table">
            <tr>
              <th>
                {{$t('recordTitle')}}
              </th>
              <td>{{ qdata.req_id }}</td>
            </tr>
            <tr>
              <th>
                {{$t('recordType')}}
              </th>
              <td>
                <!--
                  {{ qdata.type_desc }}
                -->
                {{walletType}}

              </td>
            </tr>

            <tr>
              <th>
                {{$t('recordCoin')}}
              </th>
              <td>
                {{ qdata.amount }}
                {{ $t('coinType')}}
              </td>
            </tr>

            <tr>
              <th>
                {{$t('recordFee')}}
              </th>
              <td>
                {{ qdata.fee }}
                {{ $t('coinType')}}
              </td>
            </tr>
            <tr>
              <th>
                {{$t('recordTime')}}
              </th>
              <td>{{ qdata.time_desc }}</td>
            </tr>
            <tr>
              <th>
                {{$t('recordState')}}
              </th>
              <td>
                {{ walletState }}
              </td>
            </tr>
            <tr>
              <th>
                {{$t('recordPs')}}
              </th>
              <td>
                {{ qdata.remark == "" ? $t('dataPsNone'):qdata.remark  }}
              </td>
            </tr>
          </table>

        </div>

        <div class="container text-center">
          <button
            @click="submitOK()"
            class="btn btn-default mb-2 mx-auto rounded w-100"
          >
           {{$t("recordOk")}} 
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
      "qdata": "",
      "walletType":"None",
      "walletState":"None",
    };
  },
  created() {},
  mounted() {
    var self = this;
    this.$nextTick(() => {
      self.get_data();
    });
  },


  methods: {
    get_data() {

      var url = "user/withdrawlog?q=" + this.$route.query.q;
      var self = this;

      this.$mixapi.do_get(url, {}, function(res) {
        console.log("ahui getWithdrawLog res= " + JSON.stringify(res) );
        if(res.code == 0) {
          self.qdata = res.data;

          if( res.data.type_desc == "basic") {
            self.walletType=self.$t('withdrawalAccount');
          }else{
            self.walletType=self.$t('withdrawalPromotion');
          }


          // state
          let state = res.data.state_desc;
          if (state == '審核中') self.walletState = self.$t('審核中');
          if (state == '處理中') self.walletState = self.$t('處理中');
          if (state == '轉帳中') self.walletState = self.$t('轉帳中');
          if (state == '出金成功') self.walletState = self.$t('出金成功');
          if (state == '失敗') self.walletState = self.$t('失敗');




        }

      });
    },
    submitOK() {
      this.$router.push("/home");
    },

  },
};
</script>


<style scoped>
</style>
