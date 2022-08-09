import Cookies from 'js-cookie'


export const mixapi = {
    //base_url: "http://mixapi.coincenter-us.com/",
    base_url: "http://api.anothertall.com/",

    setup: function(vue_inst) {
      this._inst = vue_inst;
      this._ask = 0;
      console.log("mixapi_setup=" + vue_inst);

      //this._setup();
    },

    check_session: function() {
      let sessid = Cookies.get("sessid");
      let access_token = Cookies.get("access_token");
      console.log("check_session sessid=" + sessid + " access_token=" + access_token);
      let data = {
        'sessid': sessid,
        'access_token': access_token,
      };
      this._do_post("check_session", data, function(res) {
        console.log("check_session res=" + JSON.stringify(res));
        if(res.sessid) {
          Cookies.set("sessid", res.sessid);
        }

      });
    },

    _do_post: function(url, data, callback) {
      let url2 = this.base_url + url;
      this._inst.$http.post(url2, data).then(function(rep) {
        callback(rep.body);
      });

    },

    do_get: function(url, data, callback) {
      let url2 = this.base_url + url;
      this._inst.$http.get(url2, data).then(function(rep) {
        callback(rep.body);
      });

    },
    
    call: function(url, params, callback) {
      let access_token = Cookies.get("access_token");
      let sessid = Cookies.get("sessid");

      let ask = this._ask + 1;
      this._ask = ask;
      var url2 = this.base_url + url;
      //console.log("mixapi.call:"+ url2);
      var params2 = Object.assign({}, params);

      var post_data = {
        'access_token': access_token,
        'sessid': sessid,
        'ask': ask,
        params: params2,
      };
      //console.log("api_call post=>" + JSON.stringify(post_data));

      this._inst.$http.post(url2, post_data).then(function(rep) {
        //console.log("api call rep=" + JSON.stringify(rep));
        var res = rep.body;
        //var res = JSON.parse(rep.body);
        if(res.sessid) {
          console.log("api call res.sessid=" + res.sessid);
        }
        callback(res);


      }).catch((err) => {
        if(err.data) {
          console.log( "api call err=" + err.data);
        }
      });


    }


};


export const mixapi_install = function(Vue) {
  console.log("mixapi_install");
  
  Vue.prototype.$mixapi = {
    base_url: "http://mixapi.coincenter-us.com/",

    setup: function(vue_inst) {
      this._inst = vue_inst;
      this._ask = 0;
      console.log("mixapi_setup=" + vue_inst);
    },
    
    call: function(url, params, callback) {
      //var self = Vue.prototype;
      //let vue = Vue.prototype;
      let access_token = Cookies.get("access_token");
      let ask = this._ask + 1;
      this._ask = ask;
      var url2 = this.base_url + url;
      //console.log("mixapi.call:"+ url2);
      var params2 = Object.assign({}, {ask: ask}, params);

      var post_data = {
        access_token: access_token,
        params: params2,
      };
      //console.log("api_call post=>" + JSON.stringify(post_data));

      this._inst.$http.post(url2, post_data).then(function(rep) {
        //console.log("api call rep=" + JSON.stringify(rep));
        var res = rep.body;
        //var res = JSON.parse(rep.body);
        callback(res);

      }).catch((err) => {
        if(err.data) {
          console.log( "api call err=" + err.data);
        }
      });


    }

  };

}

//export default { install }
