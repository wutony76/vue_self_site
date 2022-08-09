<template>
  <main class="flex-shrink-0 main has-footer commonbg">
    <login-header
      show_back="2"
      show_h5="2"
      :title="$t('noticeTitle')"
    >
    </login-header>


    <div class="bodydiv text-left">
      <!---->
      <div class="main-container mhight">
        <div class="container">
          <div class="card">

            <div v-if="is_details == 1" class="card-body px-0">
              <div class="list-group list-group-flush">

                <a 
                  v-for='(item,index) in list'
                  v-bind:key="index"
                  @click="show_details(index)"
                  href="javascript:void(0)"
                  class="list-group-item"
                  ><div class="row">
                    <div class="col-auto align-self-center">
                      <i class="iconfont text-default"></i>
                    </div>
                    <div class="col pl-0">
                      <div class="row mb-1">
                        <div class="col">
                          <p class="mb-0">{{item.title}}</p>
                        </div>
                      </div>
                      <p class="small text-secondary">{{item.addtime}}</p>
                    </div>
                  </div>
                </a>


              </div>
              <nav class="float-right"></nav>
            </div>

            <div v-if="is_details == 2" class="card-body">
              <h5>{{title}}</h5>
              <p>{{addtime}}</p>
              <p v-html="content"> </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import LoginHeader from "../components/LoginHeader.vue";
import { apiNotice } from "@/api/api";

export default {
  name: "notice",
  components: { LoginHeader },
  data() {
    return {
      is_details: 1,
      list: [],
      content:'',
      title:'',
      addtime:'',
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function () {
      this.get_list();
    });
  },
  methods: {
    show_details(key) {
      this.is_details = 2;
      this.content = this.list[key].content;
      this.title = this.list[key].title
      this.addtime = this.list[key].addtime
    },

    get_list() {
      apiNotice().then((res) => {
         console.log(res); 
        this.list = res.info;
      });
    },
  },
};

</script>
