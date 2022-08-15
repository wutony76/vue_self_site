<template>

  <nav class="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a 
                @click="go('home')"
                class="nav-link" 
                href="javascript:void(0)">
                關於東霖
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about">
                工作經歷
              </a>
            </li>

            <li class="nav-item">
              <a 
                @click="go('project')"
                class="nav-link" 
                href="javascript:void(0)">
                專案介紹
              </a>
            </li>

            <li class="nav-item">
              <a 
                @click="go('project')"
                class="nav-link" 
                href="javascript:void(0)">
                專案列表
              </a>
            </li>

            <!--
            <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#gallary">Gallary</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#book-table">Book-Table</a>
            </li>
            -->
          </ul>

          <!-- LOGO -->
          <a class="navbar-brand m-auto" href="#">
              <!--
              <img src="assets/imgs/logo.svg" class="brand-img" alt="">
              -->
              <span class="brand-txt"> Resume </span>
          </a>
          <!-- LOGO end. -->


          <ul class="navbar-nav">
            <li class="nav-item">
              <a 
                @click="go('workwall')"
                class="nav-link" 
                href="javascript:void(0)">
                
                其他作品
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#gallary">
                紀錄分享
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#gallary">
                興趣嗜好
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#contact">交流建議</a>
            </li>

            <!--
            <li class="nav-item">
                <a class="nav-link" href="#blog">Blog<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#testmonial">Reviews</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
            </li>
            <li class="nav-item">
                <a href="components.html" class="btn btn-primary ml-xl-4">Components</a>
            </li>
            -->
          </ul>
      </div>
  </nav>

</template>

<script>
//import Lang from "@/components/Lang.vue";
//import Cookies from 'js-cookie';

export default {
  name: "SelfNav",
  components: {
  //  Lang,
  },


  props: {
    show_lang: [Number, String],
    show_back: String,
    title: [String],
    show_h5: [Number, String],
  },
  watch: {
    show_lang: {
      handler: function () {
        this.$parent.hide_lang(3);
        this.change_language = 3;
      },
      deep: true,
    },
  },
  data() {
    return {
      change_language: this.show_lang,
    };
  },


  methods: {
    go(str) {
      //this.$store.dispatch("app/setButton", str);
      this.$router.push(str);
    },

  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    /* margin-left: -15px; */


  padding-left: 20px;
}



.navbar-brand h5 img{
  height: 30px;
}
.navbar-brand h5{
  color: var(--main_ft_color);
}




.header {
  padding: 0px;
  padding-right: 10px;

  box-shadow: 0px 0px 30px 15px #0a94c961;
}


.header .navbar-brand {
  color: var(--main_ft_color);
}









.sing-up {
  float: right;
  height: 30px;
  line-height: 30px;
}

.headerR{
  margin-top: 0px;
}

.headerR a img {
  width: 32px;
  height: unset;
}

</style>
