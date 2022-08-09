<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="轉帳"
    ></login-header>

    <div class="v-content__wrap">


      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 24px 8px 10px 8px;
          min-height: 320px;
        "
      >

        
        <div class="main-title" style="margin: 10px 0 20px 0;">
          <div >
            錢包ID : {{ res_data.book_id }}
          </div>
          <div></div>
        </div>

        <div class="main-title" style="margin: 10px 0 20px 0;">
          <div>
            目前餘額 : {{ balance_credit }}
          </div>
          <div></div>
        </div>


        <div class="second-box" style="margin: 10px 0 20px 0;">
          <div>
            貨幣
          </div>
          <div>
            <select
              class="form-control selecter"
              v-model="t_item_id"
              @change="on_item_change"
            >
              <option 
                v-for="(item, index) in coin_choices"
                v-bind:key="index"
                v-bind:value="item.item_id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>




        <div class="main-title" style="margin: 10px 0 20px 0;">
          <div>
            手續費 : {{ t_fee }}
          </div>
          <div></div>
        </div>

        <div class="second-box" style="margin: 10px 0 20px 0;">
          <div>
            轉帳數量
          </div>
          <div>
            <input
            
              name="amount"
              required="required"
              class="form-control"
              v-model="t_amount"
            />
          </div>
        </div>

        <div class="second-box" style="margin: 10px 0 20px 0;">
          <div>
            接收地址
          </div>
          <div>
            <input
              name="address_to"
              required="required"
              class="form-control"
              v-model="t_address"
            />
          </div>
        </div>


        <div class="second-box" style="text-align: center;">

            <button
              @click="do_submit()"
              type="button"
              id="coplink"
              class="btn btn-default rounded"
            >
              發送
            </button>
        </div>

      </div>




    </div>

    <bottom-button></bottom-button>
  </main>
</template>
<script>
// @ is an alias to /src
import BottomButton from '@/components/BottomButton.vue'
import LoginHeader from '@/components/LoginHeader.vue'

export default {
  name: "TradeList",
  components: {
    BottomButton,
    LoginHeader
  },
  data(){
    return{
      res_data: {},
      coin_choices: [],
      item_by_id: {},
      t_address: "",
      t_item_id: "",
      t_amount: 0,
      t_fee: 0,
      balance_credit: 0,
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.load_data();
    });
  },
  methods:{
    load_data(){
      
      console.log("user trans_out_req load_data...");

      var self = this;
      this.$mixapi.call("user/trans_out_req", {}, function(res){
          console.log("user trans_out_req=" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;
          self.coin_choices = res.data.items;
          for(var i=0; i<self.coin_choices.length; i++) {
            var item = self.coin_choices[i];
            var item_id = item["item_id"];
            self.item_by_id[item_id] = item;
          }
          self.t_item_id = 1;
          self.on_item_change()
        }
      );
    },

    on_item_change() {
      var item = this.item_by_id[this.t_item_id];
      this.t_fee = item.fee;
      this.balance_credit = item.balance;
    },

    do_submit(){

      var self = this;
      var post_data = {
        item_id: self.t_item_id,
        amount: self.t_amount,
        address: self.t_address,
      };

      this.$mixapi.call("user/trans_out_req_ok", post_data, function(res){
          console.log("user trans_out_req_ok=" + JSON.stringify(res));

          if (res.code != 0){
            self.$layer.msg(res.reason);
            return;
          }


          self.$router.push({
            name: 'TransOutPrepare', 
            params: {
              prepare: res.data,
            },
            query: {
              q: res.data.q,
            },
          });

          //self.res_data = res.data;

        }
      );
    },





  }
};
</script>



<style scoped>


.main-title{
  font-weight: 500;
  font-size: 15px;
}

.second-title{
  margin-bottom: 10px;
}

.second-box{
  margin-bottom: 20px;

}


.second-box select,
.second-box input{
  margin-bottom: 10px;
  border: 1px solid #2262ab;
}


.second-box button{
  width:100%;
  background-color: var(--btn_normal_color);
  color: var(--main_ft_color);
  border: 1px solid #05182e;
}


.second-box button:hover {
  background-color: var(--btn_hover_color);
  color: var(--main_ft_color);
}

.v-content__wrap{
  margin-left: 5%;
  margin-right: 5%;
  color: var(--main_bg_color);
}




</style>







