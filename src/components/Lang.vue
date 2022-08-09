<template>
  <div class="head-dropdown">
    <table width="100%">


      <tr @click="setLang('en')">
        <td><span>Engilsh</span></td>
      </tr>


      <tr @click="setLang('ch')">
        <td><span>簡中</span></td>
      </tr>


      <tr @click="setLang('tw')">
        <td><span>繁中</span></td>
      </tr>



      <!-- 越南 -->
      <tr @click="setLang('vn')">
        <td>
          <span> Việt Nam </span>
        </td>
      </tr>
      
    </table>
  </div>
</template>



<script>
export default {
  name: "Lang",
  props: ["change_language"],
  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
      console.log(lang);
      this.$store.dispatch("app/setLanguage", lang);
      this.$emit("hide_lang");
    },
  },
};
</script>
