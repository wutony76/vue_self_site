<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="綁定手機"
    >
    </login-header>




    <div class="v-content__wrap ">

      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 24px 8px 10px 8px;
          min-height: 320px;
        "
      >
      
        
        <div class="main-title" style="margin: 10px 0 20px 0;">
          <div>
            錢包ID : {{ res_data.book_id }}
          </div>
        </div>


        <div class="second-box" style="margin: 10px 0 20px 0;">
          <div class="second-title">
            手機號碼
          </div>
          <div>
            <input
              style="border: 1px solid #000; padding: 8px;"
              name="address_to"
              required="required"
              class="form-control"
              v-model="t_phone"
            />
          </div>

          <div style="text-align: center;">
            <button
              @click="do_send_code()"
              type="button"
              id="coplink"
              class="btn btn-default mb-2 mx-auto rounded w-100"
            >
              發送驗證碼
              <span
                v-if="send_code_sec > 0"
              >
              (
              {{ send_code_sec }}秒後重送
              )
              </span>
            </button>
          </div>


        </div>

        

        <div class="second-box" style="margin: 10px 0 20px 0;">
          <div class="second-title">
            驗證碼
          </div>
          <div>
            <input
              style="border: 1px solid #000; padding: 8px;"
              name="amount"
              required="required"
              class="form-control"
              v-model="t_code"
            />
          </div>


          <div style="text-align: center;">
            <button
              @click="do_submit()"
              type="button"
              id="coplink"
              class="btn btn-default mb-2 mx-auto rounded w-100"
            >
              綁定
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
      t_phone: "",
      t_code: "",
      send_code_sec: 0,
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


      this.$mixapi.call("user/get_info", {}, function(res){
        console.log("bind_phone get_info=" + JSON.stringify(res));
        if (res.code != 0){
          return;
        }
        self.res_data = res.data;

      });
    },

    _countdown_send_code() {
      this.send_code_sec -= 1;

      if(this.send_code_sec > 0) {
        setTimeout(this._countdown_send_code, 1000);
      }
    },

    do_send_code(){
      var self = this;

      if(self.send_code_sec <= 0) {
        var post_data = {
          mobile: self.t_phone,
        }

        this.$mixapi.call("send_mobile_code", post_data, function(res){
          console.log("send_mobile_code=" + JSON.stringify(res));
          if (res.code != 0){
            self.$layer.msg(res.reason);
            return;
          }

          self.send_code_sec = 61;
          self._countdown_send_code();

        });

      }
    },

    do_submit(){

      var self = this;
      var post_data = {
        mobile: self.t_phone,
        code: self.t_code,
      };

      this.$mixapi.call("user/bind_phone", post_data, function(res){
          console.log("user bind_phone=" + JSON.stringify(res));
          if (res.code != 0){
            self.$layer.msg(res.reason);
            return;
          }

          self.$router.push("/change_login_password");

        }
      );
    },





  }
};
</script>



<style scoped>


.main-title{
  font-weight: 700;
  font-size: 20px;
}

.second-title{
  margin-bottom: 10px;
}

.second-box{
  margin-bottom: 20px;

}

.second-box input{
  margin-bottom: 10px;
}


.second-box button{
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