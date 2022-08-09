<template>
  <main class="flex-shrink-0 main has-footer commonbg">
  </main>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: "Login",
  data() {
    var token = this.$route.query.token;
    Cookies.set('token', token);

    console.log('sign token: ' + token);

   this.$router.push("/home");

    return {
    };

  }
};
</script>
