<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header show_back="1" show_h5="2" title=""></login-header>
    <div class="container active">
      <div class="van-tabs van-tabs--card">
        <div class="van-tabs__wrap">
          <div role="tablist" class="van-tabs__nav van-tabs__nav--card">

            <div
              @click="show_product()"
              role="tab"
              :class="['van-tab ', { 'van-tab--active': is_product == 1 }]"
            >
              <span class="van-tab__text van-tab__text--ellipsis">{{
                $t("invesProduct")
              }}</span>
            </div>


            <!--
            <div @click="jump()" role="tab" class="van-tab">
              <span class="van-tab__text van-tab__text--ellipsis">{{
                $t("invesRecharge")
              }}</span>
            </div>
            -->


            <div
              @click="show_list()"
              role="tab"
              :class="['van-tab ', { 'van-tab--active': is_product != 1 }]"
            >
              <span class="van-tab__text van-tab__text--ellipsis">
              <!--
                {{ $t("invesProduct") }}
                -->
                {{ $t("mineList") }}
              </span>
            </div>

          </div>
        </div>
        <div class="van-tabs__content"></div>
      </div>

      <div v-if="is_product == 2" class="nodata">
        <figure>
          <img class="noDataImg" />
        </figure>
        <p>{{ $t("invesOrders") }}</p>
      </div>



      <div v-if="is_product == 1">
        <div class="van-row2">

          <div
            v-for="(item, index) in mining_list"
            v-bind:key="index"
            class="van-col van-col--12"
            style="padding-right: 5px"
          >
            <div class="product_item" @click="showInvestpro(item.id)">
              <div class="item_img van-image" style="width: 100%; height: 100%">
                <img
                  src="../assets/mobile/tpl_upload/20211203194420411.jpg"
                  class="van-image__img"
                />
              </div>
              <h4>{{ item.name }}</h4>


              <div class="item_word">

                <p style="color:red">
                  {{ $t("invesPrice")}}
                  {{ item.price }} 
                  {{ $t('coinType') }} 
                </p>
                <p>
                  {{ $t("invesRebate")}}
                  {{ item.day_rebate }} 
                  {{ item.coin_name }}
                </p>

                <p>
                  {{ $t("invesCycle") }}{{ item.days }}{{ $t("invesDay") }}
                </p>


              </div>
            </div>
          </div>
        </div>
        <div>
          <ul class="page van-pagination">
            <li
              class="
                van-pagination__item
                van-pagination__item--disabled
                van-pagination__prev
                van-hairline
              "
            >
              &lt;
            </li>
            <li
              class="
                van-pagination__item
                van-pagination__item--active
                van-pagination__page
                van-hairline
              "
            >
              1
            </li>
            <li
              class="
                van-pagination__item
                van-pagination__item--disabled
                van-pagination__next
                van-hairline
              "
            >
              &gt;
            </li>
          </ul>
        </div>
      </div>

      <!-- mine list -->
      <div v-if="is_product == 3">

        <div class="van-row2">
          <div
            v-for="(item, index) in mining_order"
            v-bind:key="index"
            class="van-col van-col--12"
            style="padding-right: 5px"
          >
            <div class="product_item" @click="showInfo(item.id)">
              <div class="item_img van-image" style="width: 100%; height: 100%">
                <img
                  src="../assets/mobile/tpl_upload/20211203194420411.jpg"
                  class="van-image__img"
                />
              </div>
              <h4>{{ item.name }}</h4>


              <div class="item_word">
                <p>
                  <!--
                  Daily Rebate: 
                  -->
                  {{ $t("invesRebate") }}
                  {{ item.day_rebate }} 
                  <!-- {{ item.coin_name }} -->

                  {{ $t("coinType") }} 
                </p>

                <p>
                  {{ $t("invesCycle") }}
                  {{ item.days }}
                  {{ $t("invesDay") }}
                </p>

                <p>
                  {{ item.state == 1 ? $t("invesTypeRun") : $t("invesTypeEnd") }}
                </p>
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
//import { apiMining, apiMiningOrder } from "@/api/api";

export default {
  name: "Investlist",
  components: {
    BottomButton,
    LoginHeader,
  },
  data() {
    return {
      is_show_recharge: 1,
      is_product: 1,
      mining_list: [],
      mining_order: [],
    };
  },
  created() {},
  mounted() {
    var self = this;
    this.$nextTick(() => {
      self.mining();
    });
  },

  methods: {
    show_product() {
      //console.log("show_product");
      this.is_product = 1;
    },

    show_list() {
      //apiMiningOrder().then((res) => {
      var self = this;
      this.$mixapi.call("mining/mylist", {}, function(res) {
        //console.log("show_list res=" + JSON.stringify(res));
        if (res.code == 0) {
          self.mining_order = res.data;

          if(res.data.length > 0) {
            self.is_product = 3;
          } else {
            self.is_product = 2;
          }
        }
      });
    },

    jump() {
      this.$router.push("/recharge"); //返回上一层
    },

    showInvestpro(id) {
      this.$router.push({ path: "/investpro", query: { productId: id } });
    },

    showInfo(id) {
      this.$router.push({ path: "/investInfo", query: { qid: id } });
    },



    mining() {
      var self = this;
      this.$mixapi.call("mining/list", {}, function(res) {
        //console.log("mining_list res=" + JSON.stringify(res));
        if (res.code == 0) {
          self.mining_list = res.data;
        }
      });
    },
    miningOrder() {},
  },
};
</script>
