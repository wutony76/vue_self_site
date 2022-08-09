<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('listTitle')"
    ></login-header>
    <div class="bodydiv">
      <div class="main-container mhight">
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
                <div @click="searchTradeList()">
                  <i class="iconfont"></i>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="container">
          <div class="card">
            <div class="card-body px-0">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  v-for="(item, index) in trade_list"
                  v-bind:key="index"
                >
                  <div class="row align-items-center">
                    <div class="col align-self-center pr-0">
                      <h6 class="font-weight-normal mb-1">
                        {{ $t("listRevenue") }}
                      </h6>
                      <p class="small text-secondary">{{ item.create_time }}</p>
                    </div>
                    <div class="col-auto">
                      <h6 class="text-success">{{ item.amount }} TRX</h6>
                      <div class="col-auto pl-0">
                        <button
                          @click="addEarnings(item.id, index)"
                          class="btn btn-sm btn-default rounded"
                          :disabled="item.state == 1 ? true : false"
                        >
                          {{
                            item.state == 1
                              ? $t("listReceived")
                              : $t("listReceive")
                          }}
                        </button>
                      </div>
                      <!---->
                    </div>
                  </div>
                </li>
              </ul>

              <div class="v-datatable v-table theme--light">
                <div class="v-datatable__actions">
                  <div class="v-datatable__actions__select">
                    {{ $t("listPage") }}
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
                              <select v-model="page_size" @change="loadSize()">
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
                    <div class="v-datatable__actions__pagination">
                      {{ curr_page }}-{{ page_total }} of {{ curr_page }}
                    </div>
                    <button
                      @click="delPage()"
                      class="v-btn v-btn--flat v-btn--icon theme--light"
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
                      @click="addPage()"
                      class="v-btn v-btn--flat v-btn--icon theme--light"
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
    </div>
    <bottom-button></bottom-button>
  </main>
</template>
<script>
// @ is an alias to /src
import BottomButton from "@/components/BottomButton.vue";
import LoginHeader from "@/components/LoginHeader.vue";
import { apiTradeListAll, apiAddEarnings } from "@/api/api";

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
      curr_page: 1,
      page_total: 5,
      page_size: 10,
      trade_list: [],
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getAllList();
    });
  },
  methods: {
    show_recharge() {
      this.is_show_recharge = 2;
    },
    jump() {
      this.$router.path("/tradelist"); //返回上一层
    },

    apiTradeList(data) {
      apiTradeListAll(data).then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.curr_page = res.curr_page;
          this.page_total = res.page_total;
          this.trade_list = res.info;
        } else {
          this.$layer.msg(res.msg);
        }
      });
    },
    searchTradeList() {
       let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: 1,
        page_size: 10,
      };
      this.apiTradeList(data);
    },

    getAllList() {
      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: 1,
        page_size: 10,
      };
      this.apiTradeList(data);
    },
    loadSize() {
      console.log(this.page_size);
      let data = {
        stare_time: this.value1,
        ent_time: this.value2,
        curr_page: 1,
        page_size: this.page_size,
      };
      this.apiTradeList(data);
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
      this.apiTradeList(data);
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
      this.apiTradeList(data);
    },
    addEarnings(id, key) {
      console.log(key), console.log(this.trading_list);
      apiAddEarnings({ id: id }).then((res) => {
        this.$layer.msg(res.msg);
        this.trade_list[key].state = 1;
      });
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