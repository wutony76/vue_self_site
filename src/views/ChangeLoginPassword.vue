<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="修改密碼"
    ></login-header>

    <div class="v-content__wrap">


      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 24px 8px 10px 8px;
          min-height: 320px;
        "
      >

        
        <div style="margin: 10px 0 20px 0;">
          <div class="main-title">
            錢包ID : {{ res_data.book_id }}
          </div>

          <div
            class ="second-box"
            v-if="res_data.play_code == 'NO_PHONE'"
          >
            <p>
              你尚未綁定手機號碼
            </p>
            
              <button
                @click="go_bind_phone()"
                type="button"
                id="coplink"
                class="btn btn-default mb-2 mx-auto rounded w-100"
              >
              
                請往綁定手機
              </button>

          </div>


        </div>

				

				<div
					v-if="res_data.play_code == 'CHANGE_PASSWORD'"
				>

					<div style="margin: 10px 0 20px 0;">
						<div>
							手機號
						</div>
						<div>
							{{ form_data.mobile }}
						</div>
					</div>
					<div class ="second-box" style="text-align: center;">

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



					<div style="margin: 10px 0 20px 0;">
						<div>
							手機驗證碼
						</div>
						<div>
							<input
								style="border: 1px solid #000; padding: 8px;"
								name="amount"
								required="required"
								class="form-control"
								v-model="form_data.code"
							/>
						</div>
					</div>

					<div style="margin: 10px 0 20px 0;">
						<div>
							密碼
						</div>
						<div>
							<input
								style="border: 1px solid #000; padding: 8px;"
								name="amount"
								required="required"
								class="form-control"
								v-model="form_data.password"
							/>
						</div>
					</div>

					<div style="margin: 10px 0 20px 0;">
						<div>
							確認密碼
						</div>
						<div>
							<input
								style="border: 1px solid #000; padding: 8px;"
								name="amount"
								required="required"
								class="form-control"
								v-model="form_data.password_confirm"
							/>
						</div>
					</div>


					<div 
            class ="second-box"
            style="text-align: center;">

							<button
								@click="do_submit()"
								type="button"
								id="coplink"
								class="btn btn-default mb-2 mx-auto rounded w-100"
							>
								修改密碼
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
			form_data: {},
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

      this.$mixapi.call("user/change_login_password_ready", {}, function(res){
        console.log("change_login_password_ready=" + JSON.stringify(res));
        if (res.code != 0){
          return;
        }
        self.res_data = res.data;
				self.form_data.mobile = res.data.my_phone_number;

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
          mobile: self.form_data.mobile,
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

    go_bind_phone(){

			this.$router.push("/bind_phone");
		},

    do_submit(){

      var self = this;

      this.$mixapi.call("user/change_login_password", self.form_data, function(res){
          console.log("user change_login_password=" + JSON.stringify(res));
          if (res.code != 0){
            self.$layer.msg(res.reason);
            return;
          }

					self.$layer.msg("修改成功");
          self.$router.push('/home');
					/*
          self.$router.push({
            name: 'TransOutConfirm', 
            params: {
              prepare: res.data,
            },
            query: {
              q: res.data.q,
            },
          });
					*/

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
  margin-bottom: 10px;
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
