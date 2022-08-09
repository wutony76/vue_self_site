<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('每日領取紀錄')"
    ></login-header>
    <div class="v-content__wrap">
      <div class="main-container">
        <div class="container mb-4">


          <div class="mb-1">
            <div class="large-gift-card">
              {{$t('每日領取紀錄')}}
            </div>
          </div>

          <table class="table">
            <tr>
              <th>ID
              </th>
              <td>{{ qdata.id }}</td>
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
                {{$t('recordTime')}}
              </th>
              <td>{{ qdata.create_time }}</td>
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

      var url = "user/promotion_exchange_log?q=" + this.$route.query.q;
      var self = this;

      this.$mixapi.do_get(url, {}, function(res) {
        console.log("ahui promotion_exchange_log res= " + JSON.stringify(res) );
        
        self.qdata = res.data;

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
