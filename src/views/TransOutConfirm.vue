<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="轉帳中"
    ></login-header>

    <div class="v-content__wrap">

      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 24px 8px 10px 8px;
          min-height: 320px;
        "
      >

        <div style="text-align: center; margin: 0 0 20px 0;">
          <div
            v-if="res_data.pending == 1"
          >
            <img style="" src="../assets/loading.gif" />
          </div>
        </div>

        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            狀態 : {{ res_data.state_desc }}
          </div>
          <div>
            
          </div>
        </div>
        
        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            錢包ID : {{ res_data.book_id }}
          </div>
          <div>
          
          </div>
        </div>

        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            接收地址 : {{ res_data.address_to }}
          </div>
          <div>
            
          </div>
        </div>

        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            貨幣種類 : {{ res_data.item_name }}
          </div>
          <div>
            
          </div>
        </div>

        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            金額 : {{ res_data.amount }}
          </div>
          <div>
            
          </div>
        </div>
        <div class="main-title" style="margin: 10px 0 16px 0;">
          <div>
            手續費 : {{ res_data.fee }}
          </div>
          <div>
           
          </div>
        </div>


        <div  class=" second-box">
          <div 
            v-if="ok_btn == 1"
          >
            <button
              @click="do_ok()"
              class="btn btn-default mb-2 mx-auto rounded w-100"
            >
              確認
            </button>
          </div>
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
      ok_btn: 0,
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.do_confirm();
    });
  },
  methods:{
    load_data(){

      var self = this;
      var post_data = {
        q: self.$route.query.q,
      };

      this.$mixapi.call("user/trans_out_info", post_data, function(res){
          console.log("user trans_out_info" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;

          var next_sec = res.data.next_sec * 1000;
          self.ok_btn = res.data.ok_btn;

          if(next_sec > 0) {
            setTimeout(self.load_data, next_sec);
          }

        }
      );
    },
    do_confirm(){

      var self = this;
      var post_data = {
        q: self.$route.query.q,
      };

      this.$mixapi.call("user/trans_out_confirm", post_data, function(res){
          console.log("user trans_out_confirm" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;
          self.load_data();

        }
      );
    },

    do_ok(){
      this.$router.push("/home");
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
