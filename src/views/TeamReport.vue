<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('teamCoinTitle')"
    ></login-header>



    <div data-v-36161b95="" class="bodydiv">
      <div class="main-container">
        <div class="container">
          <div class="card mb-4">
            <div class="card-body">
              <p class="mb-0">
                <a href="javascript:void(0)" class="btn btn-success tab"
                  >
                  {{$t('lev1')}}
                  </a >
                <a href="javascript:void(0)" class="btn btn-success tab"
                  >
                  
                  {{$t('lev2')}}
                  </a>

                <a href="javascript:void(0)" class="btn btn-success tab"
                  >
                  {{$t('lev3')}}
                  
                  </a >
              </p>
              <p class="mb-0">
                <a href="javascript:void(0)" class="btn tab">{{
                  res_data.level_1
                }}</a>
                <a href="javascript:void(0)" class="btn tab">{{
                  res_data.level_2
                }}</a>
                <a href="javascript:void(0)" class="btn tab">{{
                  res_data.level_3
                }}</a>
              </p>

            </div>
          </div>



          <div class="card mb-4">
            <div class="card-body p-0">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th></th>

                    <th>
                      {{$t('teamCoinMine')}}
                    </th>

                    <th>
                      {{$t('teamCoinAll')}}
                    </th>

                    <th>
                      {{$t('teamCoinAllCoin')}}
                    </th>

                    <th>
                      {{$t('teamCoinOffline')}}
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in res_data.stats_rows" v-bind:key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.self_bonus_credit }}</td>
                    <td>{{ item.total_team_credit }}</td>
                    <td>{{ item.total_bonus_credit }}</td>
                    <td>{{ item.total_child_bonus_credit }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card mb-4">
            <div class="card-body p-0">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="min-tablet font-weight-medium">
                      {{ $t("teamCoinDate") }}
                    </th>

                    <th class="min-tablet font-weight-medium">
                      {{ $t("teamCoinCycle") }}
                    </th>

                    <th class="min-tablet font-weight-medium">
                      {{ $t("teamCoinUserId") }}
                    </th>

                    <th class="min-tablet font-weight-medium">
                      {{ $t("teamCoinOfflineUser") }}
                    </th>

                    <th class="font-weight-medium text-right">
                      {{ $t("teamAmount") }}
                    </th>

                  </tr>
                </thead>


                <tbody>

                  <tr v-for="(item,index) in res_data.log_rows" v-bind:key="index">
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p class="mb-0">{{item.time}}</p>
                          <p class="text-secondary small">
                            {{ item.desc }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                       {{item.days}}
                    </td>
                    <td>
                       {{item.user_id}}
                    </td>
                    <td>
                       {{item.level}}
                    </td>
                    <td class="text-right text-success">{{item.credit}}</td>
                  </tr>
                </tbody>
              </table>
              <nav class="float-right"></nav>
            </div>




            <div class="v-datatable v-table theme--light">
              <div class="v-datatable__actions">
                <div class="v-datatable__actions__select">
                  {{ $t("teamPage") }}
                  <div
                    role="combobox"
                    class="
                      v-input v-text-field v-select
                      v-input--hide-details
                      v-input--is-label-active
                      v-input--is-dirty
                      theme--light
                    "
                  >
                    <div class="v-input__control">
                      <div class="v-input__slot">
                        <div class="v-select__slot">
                          <div class="v-select__selections">
                            <select>
                              <option value="10">10</option>
                              <option value="20">20</option>
                              <option value="30">30</option>
                            </select>
                          </div>
                        </div>
                        <div class="v-menu"></div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="v-datatable__actions__range-controls">
                  <div class="v-datatable__actions__pagination">{{cur_page}}-{{page_total}} of {{cur_page}}</div>

                  <button
                    @click="prePage()"
                    type="button"
                    class="
                      v-btn v-btn--flat v-btn--icon
                      theme--light
                    "
                  >
                    <div class="v-btn__content">
                      <i
                        class="
                          v-icon
                          mdi mdi-chevron-left
                          theme--light
                          iconfont
                        "
                        ></i
                      >
                    </div>
                  </button>


                  <button
                    @click="nextPage()"
                    type="button"
                    class="
                      v-btn v-btn--flat v-btn--icon
                      theme--light
                    "
                  >
                    <div class="v-btn__content">
                      <i
                        class="
                          v-icon
                          mdi mdi-chevron-right
                          theme--light
                          iconfont
                        "
                        ></i
                      >
                    </div>
                  </button>



                </div>
              </div>
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
//import { apiMyTeam, apiTeamEarnings } from "@/api/api";

export default {
  name: "Team",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      is_show_recharge: 1,
      res_data: "",
      objs: [],
      log_rows: [],
      cur_page:1,
      page_size:10,
      page_total:1,
    };
  },
  created() {},


  mounted() {
    this.$nextTick(() => {
      this.getMyTeam();
   //   this.getTeamEarnings();
    });
  },
  methods: {
    show_recharge() {
      this.is_show_recharge = 2;
    },

    getMyTeam() {
      console.log("getMyTeam");


      var self = this;

      let q_data ={
        cur_page : this.cur_page,
        page_size : this.page_size,
      } 

      this.$mixapi.call("user/my_team_report", q_data, function(res) {
        console.log("my_team res=" + JSON.stringify(res));
        self.res_data = res.data;
        self.log_rows = res.data.log_rows;

        self.cur_page = res.data.cur_page;
        self.page_total = res.data.total_page;
      });

    },


    prePage(){
      console.log("pre");
      let page = this.cur_page;

      if (page == 1) return;
      page -= 1;
      let q_data ={
        cur_page : page,
        page_size : this.page_size,
      } 

      this.getData(q_data);
    
    },


    nextPage(){
      console.log("next");
      let page = this.cur_page;
      let page_total = this.page_total;
    
      if (page == page_total) return;
      page += 1;
      let q_data ={
        cur_page : page,
        page_size : this.page_size,
      } 

      this.getData(q_data);
    },

    getData(q_data){
      let self = this;
      //console.log(q_data);

      this.$mixapi.call("user/my_team_report", q_data, function(res) {
        //console.log("my_team res=" + JSON.stringify(res));
        self.res_data = res.data;
        self.log_rows = res.data.log_rows;

        self.cur_page = res.data.cur_page;
        self.page_total = res.data.total_page;
      });

    },










  },
};
</script>
<style scoped>
.btn-success {
  margin-right: 2px;
}
</style>
