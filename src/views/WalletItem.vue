<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      title="帳務"
    >
    </login-header>



    <div class="v-content__wrap">

      <div class="control-box" >


          <div 
            @click= "get_record(1)"
            v-if=" type == 1"
            class="select-box select"
            >

            <p>
              USDT
            </p>
          </div>

          <div 
            @click= "get_record(1)"
            v-else
            class="select-box"
            >

            <p>
              USDT
            </p>
          </div>



          <div 
            @click= "get_record(2)"
            v-if=" type == 2"
            class="select-box select">
            <p>
              TRX
            </p>
          </div>

           <div 
            @click= "get_record(2)"
            v-else
            class="select-box"
            >

            <p>
              TRX
            </p>
          </div>



      </div>



      <div 
        class="main-box"  
        v-if ="type == 1" >
        USDT : {{ res_data.balance_credit}}
      </div>

      <div 
        class="main-box"  
        v-if ="type == 2" >
        TRX : {{ res_data.balance_credit}}
      </div>



      <div
        style="background: #fff; border-radius: 8px 8px 0px 0px;
          padding: 8px 8px 10px 8px;
          min-height: 320px;
        "
      >

        <div
          v-for='(item,index) in res_data.logs'
          v-bind:key="index"
          style="
            padding: 12px; 
            margin: 10px 0 12px 0; 
            border-radius: 8px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            position: relative;
          "
        >
          <div style="">
            <div class="id">{{ item.id }}</div>
            <div style="color: #666;">
              {{ item.time_desc }}
            </div>
          </div>
          <div style="position: absolute; top: 10px; right: 10px; font-size: 20px;">
            {{ item.amount_desc }}
          </div>

        </div>

        <div 
          class="main-title"
          v-if="data_list == 0">
            尚無資料
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
//import Cookies from 'js-cookie'

export default {
  name: "TradeList",
  components: {
    BottomButton,
    LoginHeader
  },


  data(){
    return{
      res_data: {},
      type: 1,
      data_list:0,
    }
  },


  created() {
    document.title = 'Lynx';
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
      //  item_id: self.$route.query.id,
        item_id: self.type
      }


      this.$mixapi.call("user/wallet_item", post_data, function(res){
          console.log("user wallet_item data=" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;
          console.log( self.res_data );

          document.title = 'Lynx | ' + res.data.name;
          self.data_list =  res.data.logs.length;
        }
      );

    },

    get_record( type){

      var self = this;
      var post_data = {
      //  item_id: self.$route.query.id,
        item_id: type
      }

      this.$mixapi.call("user/wallet_item", post_data, function(res){
          console.log("user wallet_item data=" + JSON.stringify(res));
          if (res.code != 0){
            return;
          }
          self.res_data = res.data;
          //console.log( self.res_data );

          document.title = 'Lynx | ' + res.data.name;
          self.type = type;
          self.data_list =  res.data.logs.length;
          
        }
      );

    },





  }
};

</script>



<style scoped>

.main-box{
  
}



.control-box{
  display:flex;
  flex-direction: row;  /* 按照列column(垂直方向)排列*/
  margin-bottom: 10px;
}

.control-box div:first-child{
  margin-right: 13px;
}

.select-box:first-child{
  margin-right: 13px;
}

.select-box{
    width: 50%;
    
    text-align: center;
    height:100px;
    min-height: 100px;

    border: 1px solid var(--main_bg_color);
    -webkit-border-radius: 10px;


  width:100%;
  display: table;
}


.select-box p{
  display: table-cell;
  vertical-align: middle;
}

.select{
  background: var(--main_btn_color);
  font-size:20px;
    font-weight: 800;
    color: #ececda;
} 






.main-box{

    min-height: 150px;
    background: #0e2f56;
    -webkit-border-radius: 10px;


    /** center  */
    display: flex;
    justify-content: center; 
    align-items: center; 

    font-size:20px;
    font-weight: 800;
    color: #ececda;


    /*display: flex;*/
    flex-direction: column;  /* 按照列column(垂直方向)排列*/
  }


.main-title{
  width:100%;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
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



