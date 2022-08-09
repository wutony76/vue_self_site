<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="轉帳確認"
    ></login-header>

    <div class="v-content__wrap">

      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 24px 8px 10px 8px;
          min-height: 320px;
        "
      >

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

        <div
          class="second-box"
          v-if="res_data.play_state == 1"
        >
          <div
            
            style="margin: 10px 0 20px 0;">
            <div>
              安全密碼
            </div>
            <div>
              <input
                
                name="security_password"
                required="required"
                class="form-control"
                v-model="security_password"
              />
            </div>
          </div>


          <div style="text-align: center;">

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
        
        <div
          v-if="res_data.play_state == 3"
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
      security_password: "",
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

          var qid = res.data.q;
          if(res.data.play_state == 2) {
            self.$router.push({
              name: 'TransOutConfirm', 
              query: {
                q: qid,
              },
            });
            return;
          }


        }
      );
    },

    do_submit(){

      var self = this;
      var post_data = {
        q: self.$route.query.q,
        security_password: this.security_password,
      };

      this.$mixapi.call("user/trans_out_prepare", post_data, function(res){
          console.log("user trans_out_prepare=" + JSON.stringify(res));
          if (res.code != 0){
            self.$layer.msg(res.reason);

            


            return;
          }

          self.$router.push({
            name: 'TransOutConfirm', 
            query: {
              q: res.data.q,
            },
          });

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
