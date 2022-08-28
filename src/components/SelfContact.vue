<template>
  <div id="contact" class="container-fluid bg-dark text-light border-top wow fadeIn">
    <div class="row">
        <!--
        <div class="col-md-6 px-0">
            <div id="map" style="width: 100%; height: 100%; min-height: 400px"></div>
        </div>
        -->
        <div class="col-md-12 px-5 has-height-lg middle-items"
          style="
            min-height: 350px;
          ">
          
            <h5 
              style="
                width:auto;
              ">
              其他資訊 | Information
            </h5>
            <p></p>
            <!--
            <p>Information</p>
            -->
          
            <div class="text-muted">
              <!--
              <p><span class="ti-location-pin pr-3"></span> 12345 Fake ST NoWhere, AB Country</p>
              <p><span class="ti-support pr-3"></span> (886) 910987324</p>
              <p><span class="ti-email pr-3"></span>wuotny76@gmail.com</p>
              -->
              
              <p><span class="ti-desktop pr-3"></span>https://www.linkedin.com/in/%E6%9D%B1%E9%9C%96-%E5%90%B3-60838715b/</p>
              <p><span class="ti-agenda pr-3"></span>https://pda.104.com.tw/profile/share/dgtwGvOpFcaAzltvK5ioMb0zH6GDHJlp</p>
              <p><span class="ti-facebook pr-3"></span>https://www.facebook.com/DINO2STUDIO</p>
              <p><span class="ti-cloud pr-3"></span>https://drive.google.com/drive/u/1/folders/1AHUNfBenimX7Rl5TTx-T39BcR1rTahud</p>
              <p><span class="ti-github pr-3"></span>https://github.com/wutony76</p>

            </div>
        </div>
    </div>
  </div>



</template>

<script>
//import Lang from "@/components/Lang.vue";
//import Cookies from 'js-cookie';

export default {
  name: "SelfContact",
  components: {
  //  Lang,
  },


  props: {
    /**
    _type:{ default:"none", type:String },
    _status:{ default:"none", type:String },

    show_lang: [Number, String],
    show_back: String,
    title: [String],
    show_h5: [Number, String],
     */
  },

  watch: {
  },
  data() {
    return {
      //change_language: this.show_lang,
    };
  },

  mounted(){
    this.$nextTick(() => {

    });
  },


  methods: {

  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
