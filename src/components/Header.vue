<template>
  <header class="header">

    <div v-if="show_back == 2" style="float: left">
      <!--  
      <button @click="go_back" type="button" class="btn btn-40 back-btn">
        <span class="text-white iconfont"></span>
      </button>
      -->
    </div>
    

    <div class="sing-up">
      <!--
      <router-link v-show="is_login == 1" to="/register_new">
      -->
      <router-link v-show="is_login == 1" to="/register">
        <a class="text-white">
          &nbsp;&nbsp;{{ $t("login.singUp") }}
        </a>  
      </router-link>


      <router-link v-show="is_login == 2" to="/login"
        ><a class="text-white"
          >&nbsp;&nbsp;{{ $t("login.singIn") }}</a
        ></router-link
      >
    </div>


<!--
    <div v-if="show_lang != 2" class="headerR" style="float: right">
      <a @click="show_lag($event)" href="javascript:void(0)">
        <img src="../assets/mobile/img/155.png" />
      </a>
      <Lang v-show="change_language == 2" v-on:hide_lang="hide_lang()"></Lang>
    </div>
    -->
  </header>
</template>

<script>
//import Lang from "@/components/Lang.vue";
export default {
  name: "Header",
  components: {
    //Lang,
  },
  props: {
    show_lang: [Number, String],
    show_back: String,
    is_login: [String, Number],
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
    show_lag(e) {
      this.change_language = 2;
      e.stopPropagation();
    },
    go_back() {
      this.$router.go(-1); //返回上一层
    },
    hide_lang() {
      this.change_language = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sing-up {
  float: right;
  height: 30px;
  line-height: 30px;
}
</style>
