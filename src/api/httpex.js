import Vue from 'vue'
import vue_resource from 'vue-resource'

Vue.use(vue_resource)


export function api_call(path, params) {

  return new Promise((resolve, reject) => {
    var self = Vue.prototype;
    var access_token = self.$accessToken;
    var url = self.$mixSiteURL + path;

    var post_data = {
      access_token: access_token,
      params: params,
    }
    console.log("api_call =>" + url);
    console.log("api_call post=>" + JSON.stringify(post_data) );
    self.$http.post(url, post_data).then(function(rep) {
      var res = rep.body;
      console.log( "api call res=" + JSON.stringify(res) );
      resolve(res);
    }).catch((err) => {
      reject(err.data);
    });

    /*
    axios.post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
    */


  });

}
