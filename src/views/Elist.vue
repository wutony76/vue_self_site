<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('elistTitle')"
    ></login-header>


    <div class="bodydiv">
      <div class="main-container">

        <!--
        <div class="searchBtn">
          <table width="100%">
            <tr>
              <td align="center">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  format="yy-MM-dd"
                  :placeholder="$t('listStartDate')"
                >
                </el-date-picker>
                ~
                <el-date-picker
                  v-model="value2"
                  type="date"
                  format="yy-MM-dd"
                  :placeholder="$t('listEndDate')"
                >
                </el-date-picker>
              </td>
              <td width="15%">
                <div>
                  <i class="iconfont"></i>
                </div>
              </td>
            </tr>
          </table>
        </div>
        -->


        <div class="container">
          <div class="row text-center mt-3">

            <div 
              @click="get_all()"
              class="col-6 col-md-3">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <p class="text-secondary small">
                    {{ $t("homeTotal") }}
                  </p>
                  <h5 class="mt-3 mb-0 font-weight-normal text-success">
                    {{wallet_total}} 
                    {{$t('coinType')}}
                  </h5>
                </div>
              </div>
            </div>


            <div 
              @click="get_basic()"
              class="col-6 col-md-3">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <p class="text-secondary small">
                    {{ $t("elistBasic") }}
                  </p>
                  <h5 class="mt-3 mb-0 font-weight-normal text-success">
                    {{basic_income}} 
                    
                    {{$t('coinType')}}
                  </h5>
                </div>
              </div>
            </div>


            <div 
              @click="get_promotion()"
              class="col-6 col-md-3">
              <div class="card border-0 mb-4">
                <div class="card-body">
                  <p class="text-secondary small">
                    {{ $t("elistPromotion") }}
                  </p>
                  <h5 class="mt-3 mb-0 font-weight-normal text-success">
                    {{promotion_income}} 
                    {{$t('coinType')}}

                  </h5>
                </div>
              </div>
            </div>
          </div>



          <div class="card mb-4">
            <div class="card-header border-0 bg-none">
              <div class="row">
                <div class="col align-self-center">
                  <h6 class="mb-0"
                    style=" text-align: center; "
                  >
                    {{ $t("elistTitle") }}
                    
                  </h6>
                </div>
              </div>
            </div>



            <div 
              class="card-body p-0">
              <table class="table mb-0">
              
                <thead>
                  <tr>

                    <th class="font-weight-medium text-medium"
                      style="text-align:center"
                    >
                      {{ $t("elistDate") }}
                    </th>

                    <th class="font-weight-medium text-medium"
                      style="text-align:center"
                    >
                      {{ $t("elistType") }}
                    </th>


                    <th class="font-weight-medium text-medium"
                      style="text-align:center"
                    >
                      {{ $t("elistAmount") }}
                    </th>

                    <th class="font-weight-medium text-medium"
                      style="text-align:center"
                      >
                      {{ $t("elistAfterAmount") }}
                    </th>


                    <th class="font-weight-medium text-medium"
                      style="text-align:center"
                    >
                      {{ $t("elistRemark") }}
                    </th>


                  </tr>
                </thead>



                <tbody
                  v-if = "wallet_type == 0"
                >

                  <tr v-for='(item,index) in elist' v-bind:key="index">

                    <td 
                      style="text-align:center"
                      >
                      {{ item.time }}
                    </td>


                    <td class="text-success"
                      style="text-align:center"
                      >
                      <div>
                        {{ item.wallet_type == 1 ? $t('bswitchBasic'): $t('bswitchPromotion') }} 
                      </div>
                    </td>


                    <td class="text-success"
                      style="text-align:center"
                      >

                      <div
                        v-if ="item.type1 == 2"
                        style="color:red"
                      >
                        -{{  Math.abs(item.credit)  }} 
                      </div>

                      <div
                        v-if ="item.type1 == 1"
                        style="color:green"
                      >
                        +{{item.credit}} 
                      </div>

                    </td>

                    <td class="text-success"
                      style="text-align:center"
                    >
                      <div>
                        {{item.balance_credit}} 
                      </div>
                    </td>


                    <td 
                      v-if = "item.type2_desc == '儲值'"
                      style="text-align:center"
                      >
                        {{ $t('儲值') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊上級獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機利潤'"
                      style="text-align:center"
                      >
                        {{ $t('礦機利潤') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '購買礦機'"
                      style="text-align:center"
                      >
                        {{ $t('購買礦機') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '團隊獎金'"
                      style="text-align:center"
                      >
                        {{ $t('團隊獎金') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('礦機上級獎勵') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦場每日領取'"
                      style="text-align:center"
                      >
                        {{ $t('礦場每日領取') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '出金'"
                      style="text-align:center"
                      >
                        {{ $t('出金') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '出金失敗'"
                      style="text-align:center"
                      >
                        {{ $t('出金失敗') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦機本金返還'"
                      style="text-align:center"
                      >
                        {{ $t('礦機本金返還') }}
                    </td>



                    <td 
                      v-else
                      style="text-align:center"
                      >
                        {{ item.type2_desc }}
                    </td>



                  </tr>
                </tbody>


                <tbody
                  v-if = "wallet_type == 1"
                >

                  <tr 
                    v-for='(item,index) in elist' v-bind:key="index"
                    v-if='item.wallet_type == 1'
                    >


                    <td 
                      style="text-align:center"
                      >
                        {{ item.time }}
                    </td>


                    <td class="text-success"
                      style="text-align:center"
                      >
                      <div>
                        {{ item.wallet_type == 1 ? $t('bswitchBasic'): $t('bswitchPromotion') }} 
                      </div>
                    </td>



                    <td class="text-success"
                      style="text-align:center"
                      >
                      
                      <div
                        v-if ="item.type1 == 2"
                        style="color:red"
                      >
                        -{{  Math.abs(item.credit)  }} 
                      </div>

                      <div
                        v-if ="item.type1 == 1"
                        style="color:green"
                      >
                        +{{item.credit}} 
                      </div>
                    </td>

                    <td class="text-success"
                      style="text-align:center"
                    >
                      <div>
                        {{item.balance_credit}} 
                      </div>
                    </td>


                    <td 
                      v-if = "item.type2_desc == '儲值'"
                      style="text-align:center"
                      >
                        {{ $t('儲值') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊上級獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機利潤'"
                      style="text-align:center"
                      >
                        {{ $t('礦機利潤') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '購買礦機'"
                      style="text-align:center"
                      >
                        {{ $t('購買礦機') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '團隊獎金'"
                      style="text-align:center"
                      >
                        {{ $t('團隊獎金') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('礦機上級獎勵') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦場每日領取'"
                      style="text-align:center"
                      >
                        {{ $t('礦場每日領取') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '出金'"
                      style="text-align:center"
                      >
                        {{ $t('出金') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '出金失敗'"
                      style="text-align:center"
                      >
                        {{ $t('出金失敗') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦機本金返還'"
                      style="text-align:center"
                      >
                        {{ $t('礦機本金返還') }}
                    </td>



                    <td 
                      v-else
                      style="text-align:center"
                      >
                        {{ item.type2_desc }}
                    </td>


                  </tr>



                </tbody>

                <tbody
                  v-if = "wallet_type == 2"
                >

                  <tr 
                    v-for='(item,index) in elist' v-bind:key="index"
                    v-if='item.wallet_type == 2'
                    >



                    <td 
                      style="text-align:center"
                      >
                        {{ item.time }}
                    </td>


                    <td class="text-success"
                      style="text-align:center"
                      >
                      <div>
                        {{ item.wallet_type == 1 ? $t('bswitchBasic'): $t('bswitchPromotion') }} 
                      </div>
                    </td>

                    <td class="text-success"
                      style="text-align:center"
                      >
                      <div
                        v-if ="item.type1 == 2"
                        style="color:red"
                      >
                        -{{  Math.abs(item.credit)  }} 
                      </div>

                      <div
                        v-if ="item.type1 == 1"
                        style="color:green"
                      >
                        +{{item.credit}} 
                      </div>

                    </td>

                    <td class="text-success"
                      style="text-align:center"
                    >
                      <div>
                        {{item.balance_credit}} 
                      </div>
                    </td>



                    <td 
                      v-if = "item.type2_desc == '儲值'"
                      style="text-align:center"
                      >
                        {{ $t('儲值') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '注冊上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('注冊上級獎勵') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機利潤'"
                      style="text-align:center"
                      >
                        {{ $t('礦機利潤') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '購買礦機'"
                      style="text-align:center"
                      >
                        {{ $t('購買礦機') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '團隊獎金'"
                      style="text-align:center"
                      >
                        {{ $t('團隊獎金') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '礦機上級獎勵'"
                      style="text-align:center"
                      >
                        {{ $t('礦機上級獎勵') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦場每日領取'"
                      style="text-align:center"
                      >
                        {{ $t('礦場每日領取') }}
                    </td>

                    <td 
                      v-else-if = "item.type2_desc == '出金'"
                      style="text-align:center"
                      >
                        {{ $t('出金') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '出金失敗'"
                      style="text-align:center"
                      >
                        {{ $t('出金失敗') }}
                    </td>


                    <td 
                      v-else-if = "item.type2_desc == '礦機本金返還'"
                      style="text-align:center"
                      >
                        {{ $t('礦機本金返還') }}
                    </td>



                    <td 
                      v-else
                      style="text-align:center"
                      >
                        {{ item.type2_desc }}
                    </td>







                  </tr>
                </tbody>

              </table>



              <nav class="float-right"></nav>
            </div>


            <div class="v-datatable v-table theme--light">
              <div class="v-datatable__actions">

                <div class="v-datatable__actions__select">
                  {{ $t("elistPage") }}

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
                            <select @change="loadSize()" v-model="page_size">
                                <option v-bind:value="10">10</option>
                                <option v-bind:value="20">20</option>
                                <option v-bind:value="30">30</option>
                            </select>
                          </div>
                        </div>
                        <div class="v-menu"></div>
                      </div>


                    </div>
                  </div>
                </div>


                <div class="v-datatable__actions__range-controls">

                    <div class="v-datatable__actions__pagination">{{ curr_page }}-{{ page_total }} of {{ curr_page }}</div>

                    <button
                      type="button"
                       @click="prePage()"
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
                          > </i>
                      </div>
                    </button>


                    <button
                      type="button"
                         @click="nextPage()"
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
//import { apiGetProfitList } from "@/api/api";

export default {
  name: "TradeList",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      is_show_recharge: 1,
      value1: "",
      value2: "",
      is_received: 1,
      elist: [],
      curr_page: 1,
      page_size: 10,
      page_total: 1,
      basic_income:0,
      promotion_income:0,


      //add ttt 
      infors_list: [],
      infors: {},
      wallet_type:0,
      wallet_total:0,

    };
  },
  created() {
    this.getCurrentTime();
  },
  mounted() {
    this.$nextTick(() => {
      this.getElist();
    });
  },


  methods: {
    show_recharge() {
      this.is_show_recharge = 2;
    },
    jump() {
      this.$router.path("/tradelist"); //返回上一层
    },

    apiProfitList(data){

      var self = this;
      this.$mixapi.call("user/get_info", {}, function(res){
          //console.log(JSON.stringify(res));
          if (res.code == 0){
            self.basic_income = res.data.basic_trx;
            self.promotion_income =res.data.promotion_trx;
          }
        }
      );


      this.$mixapi.call("user/finance_list", {}, function(res){
        console.log(data);
        console.log("ttt >>>> getData");
        console.log(JSON.stringify(res));

          if(self.code == 0){
            //self.elist = res.data;
            self.elist = res.data;

            console.log(self.elist);
            //self.infos = res.data;
          }
        }
      );





      /*
      apiGetProfitList(data).then((res) => {
      this.elist = res.info;
      //this.basic_income = res.basic_income;
      //this.promotion_income =res.promotion_income;
      this.curr_page = res.curr_page;
      this.page_total = res.page_total;
      });
      */

    },

    getElist() {
      console.log("getElist");
      /*
      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: this.curr_page,
        page_size: this.page_size,
      };
      this.apiProfitList(data);
      */

      var self = this;
      this.$mixapi.call("user/get_info", {}, function(res){
     //     console.log(JSON.stringify(res));
          if (res.code == 0){

            self.wallet_total = res.data.total_credit;
            self.basic_income = res.data.basic_trx;
            self.promotion_income =res.data.promotion_trx;
          }
        }
      );



      let q_data = {
        curr_page: this.curr_page,
        page_size: this.page_size,
      } 


      this.$mixapi.call("user/finance_list", q_data, function(res){
        console.log("ttt >>>> getData");
        console.log(JSON.stringify(res));

          if(res.code == 0){
            //self.elist = res.data;
            self.elist = res.data.objs;  
            //console.log(self.infors_list.length);

            self.elist = res.data.objs;  
            self.page_total = res.data.total_page;
            self.page_size = res.data.page_size;
            self.curr_page = res.data.cur_page;
          }
        }
      );

    },



    prePage(){
      let page = this.curr_page;
      console.log("pre = " + page);


      if (page == 1) return; 
      page -= 1;
      let q_data = {
        cur_page: page,
        page_size: this.page_size,
      } 
      this.getData(q_data);
    },

    nextPage(){
      let page = this.curr_page;
      let page_total = this.page_total;

      console.log("next =" + page);

      if (page == page_total) return; 
      page += 1;
      let q_data = {
        cur_page: page,
        page_size: this.page_size,
      } 
      this.getData(q_data);
    
    },

    getData(q_data){
      console.log(q_data);
      let self = this;
      this.$mixapi.call("user/finance_list", q_data, function(res){
        //console.log("ttt >>>>>>>");
        //console.log(JSON.stringify(res));
          if(res.code == 0){
            self.elist = res.data.objs;  

            self.elist = res.data.objs;  
            self.page_total = res.data.total_page;
            self.page_size = res.data.page_size;
            self.curr_page = res.data.cur_page;
          }
        }
      );
    
    },






    get_all(){
      console.log("get_all");
      this.wallet_type = 0;
    },

    get_basic(){
      this.wallet_type = 1;
    },

    get_promotion(){
      this.wallet_type = 2;
    },


     loadSize() {
      console.log(this.page_size);
      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: 1,
        page_size: this.page_size,
      };
      this.apiProfitList(data);
    },







    addPage() {
      console.log(11);
      this.curr_page++;

      if (this.curr_page >= this.page_total) {
        this.curr_page = this.page_total;
      }

      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: this.curr_page,
        page_size: this.page_size,
      };
      this.apiProfitList(data);
    },
    delPage() {
      console.log(22);
      this.curr_page--;
      if (this.curr_page <= 1) {
        this.curr_page = 1;
      }
      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: this.curr_page,
        page_size: this.page_size,
      };
      this.apiProfitList(data);
    },
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();

      _this.value1 = yy + "/" + mm + "/" + dd;
      _this.value2 = yy + "/" + mm + "/" + dd;
    },


  },
};
</script>




<style scoped>
.el-date-editor.el-input {
  width: 123px;
}
.v-btn:before {
  width: 0;
  height: 0;
}
</style>
