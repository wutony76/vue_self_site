<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('teamTitle')"
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
                  team_info.level_1
                }}</a>
                <a href="javascript:void(0)" class="btn tab">{{
                  team_info.level_2
                }}</a>
                <a href="javascript:void(0)" class="btn tab">{{
                  team_info.level_3
                }}</a>
              </p>

            </div>
          </div>

          <div class="card mb-4">
            <div class="card-body p-0">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="min-tablet font-weight-medium">
                      {{ $t("teamDate") }}
                    </th>
                    <th class="font-weight-medium text-right">
                      {{ $t("teamAmount") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in objs" v-bind:key="index">
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p class="mb-0">{{item.create_time}}</p>

                          <p 
                            v-if = "item.desc === '礦機利潤'" 
                            class="text-secondary small"
                            >
                            {{ $t('礦機利潤') }}
                          </p>

                          <p 
                            v-else-if = "item.desc === '礦機上級獎勵'" 
                            class="text-secondary small"
                            >
                            {{ $t('礦機上級獎勵') }}
                          </p>

                          <p 
                            v-else-if = "item.desc === '團隊獎金'" 
                            class="text-secondary small"
                            >
                            {{ $t('團隊獎金') }}
                          </p>

                          <p 
                            v-else-if = "item.desc === '注冊獎勵'" 
                            class="text-secondary small"
                            >
                            {{ $t('注冊獎勵') }}
                          </p>

                          <p 
                            v-else-if = "item.desc === '注冊上級獎勵'" 
                            class="text-secondary small"
                            >
                            {{ $t('注冊上級獎勵') }}
                          </p>

                          <p 
                            v-else
                            class="text-secondary small"
                            >
                            {{ item.desc }}
                          </p>

                        </div>
                      </div>
                    </td>
                    <td class="text-right text-success">{{item.amount_desc}}</td>
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
                    @click = "prePage()"
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
                    type="button"

                    class="
                      v-btn v-btn--flat v-btn--icon
                      theme--light
                    "
                  >
                    <div class="v-btn__content">
                      <i
                        @click = "nextPage()"
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
      team_info: "",
      objs: [],
      cur_page:1,
      page_size:10,
      page_total:1,
    };
  },


  created() {},

  mounted() {
    this.$nextTick(() => {
      this.getMyTeam();
      this.getTeamEarnings();
    });
  },



  methods: {
    show_recharge() {
      this.is_show_recharge = 2;
    },

    getMyTeam() {
      var self = this;
      this.$mixapi.call("user/my_team", {}, function(res) {
        console.log("my_team res=" + JSON.stringify(res));
        self.team_info = res.data;
      });

      /*
      apiMyTeam().then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.team_info = res.info;
        }
      });
      */
    },

    getTeamEarnings() {
      var self = this;
      var q_data={
        cur_page:this.cur_page,
        page_size:this.page_size,
      }
      console.log("page_total = " + this.cur_page);
      console.log("page_size = " + this.page_size);

      this.$mixapi.call("user/my_team_log", q_data, function(res) {
        console.log("my_team_log res=" + JSON.stringify(res));
        self.objs = res.data.objs;
        self.cur_page = res.data.cur_page;
        self.page_total = res.data.page_total;

        console.log("page_total = " + self.page_total);
      });

      /*
      let data={
        curr_page:this.curr_page,
        page_size:this.page_size,
      }
      apiTeamEarnings(data).then((res) => {
        console.log(res);
         if (res.status == 1) {
          this.reward = res.info;
          this.curr_page = res.curr_page;
          this.page_total = res.page_total;
        }
      });
      */

    },

    nextPage(){
      console.log("next_page") ;
      let self = this;
      let page = this.cur_page;
      let page_end = this.page_total;

      if (page == page_end ){
        self.$layer.msg( self.$t("pageEnd") );
        return;
      }

      page += 1;
      let data = {
        cur_page : page,
        page_size : self.page_size,
      }
      self.getData(data);
    },

    prePage(){
      console.log("pre_page") ;

      let self = this;
      let page = this.cur_page;
      let page_end = this.page_total;

      if (page == 1 ){
        self.$layer.msg( self.$t("pageStart") );
        return;
      }

      page -= 1;
      let data = {
        cur_page : page,
        page_size : self.page_size,
      }
      self.getData(data);
    },

    getData(q_data){
      let self = this;
      let page = self.cur_page;
      //console.log("page = " + page);

      this.$mixapi.call("user/my_team_log", q_data, function(res) {
      //  console.log("my_team_log res=" + JSON.stringify(res));
        self.objs = res.data.objs;
        self.cur_page = res.data.cur_page;
        self.page_total = res.data.page_total;
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
