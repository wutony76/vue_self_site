import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    meta: {
      title: 'Resume'
    }
  },


  /**  base */

  /*
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue'),
    meta: {
      title: 'Lynx - 登入'
    }
  },

  
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/Register.vue'),
    meta: {
      title: 'Lynx - 註冊'
    }
  },

  {
    path:'/register_new',
    name:'RegisterNew',
    component:()=>import('../views/RegisterNew.vue'),

    meta: {
      title: 'Lynx - 註冊新帳號'
    }
  },

  {
    path:'/change_login_password',
    name:'change_login_password',
    component:()=>import('../views/ChangeLoginPassword.vue'),

    meta: {
      title: 'Lynx - 修改登入密碼'
    }
  },
  */

  /*
  {
    path:'/register_active',
    name:'RegisterActive',
    component:()=>import('../views/RegisterActive.vue'),

    meta: {
      title: 'Lynx - 啟用'
    }
  },
  */




  /**  main */
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },

  {
    path: '/about',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },

  {
    path: '/work',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  


  {
    path: '/project',
    name: 'Project',
    component:()=>import('../views/Project.vue'),
    meta: {
      title: 'Project'
    }
  },

  {
    path: '/workwall',
    name: 'Workwall',
    component:()=>import('../views/Workwall.vue'),
    meta: {
      title: 'Workwall'
    }
  },

  {
    path: '/working',
    name: 'Working',
    component:()=>import('../views/Working.vue'),
    meta: {
      title: 'Working'
    }
  },







  {
    path: '/bank',
    name: 'Bank',
    component:()=>import('../views/Bank.vue'),
    meta: {
      title: 'Lynx'
    }
  },


  
  

  {
    path: '/bind_phone',
    name: 'BindPhone',
    component:()=>import('../views/BindPhone.vue'),
    meta: {
      title: 'Lynx'
    }
  },







  {
    path:'/wallet_item',
    name:'WalletItem',
    component:()=>import('../views/WalletItem.vue'),

    meta: {
      title: 'Lynx - 註冊新帳號'
    }
  },

  {
    path:'/trans_in',
    name:"TransIn",
    component:()=>import('../views/TransIn.vue'),
    meta: {
      title: 'Lynx - 收款'
    }
  },

  {
    path:'/trans_out_req',
    name:"TransOutReq",
    component:()=>import('../views/TransOutReq.vue'),
    meta: {
      title: 'Lynx - 轉帳'
    }
  },

  {
    path:'/trans_out_prepare',
    name: "TransOutPrepare",
    component:()=>import('../views/TransOutPrepare.vue'),
    meta: {
      title: 'Lynx - 轉帳確認'
    }
  },

  {
    path:'/trans_out_confirm',
    name: "TransOutConfirm",
    component:()=>import('../views/TransOutConfirm.vue'),
    meta: {
      title: 'Lynx - 轉帳中'
    }
  },





  {
    path:'/my',
    name:"My",
    component:()=>import('../views/My.vue'),
    meta: {
      title: 'Lynx'
    }
  },


  {
    path:'/fast',
    name:"Fast",
    component:()=>import('../views/Fast.vue'),
    meta: {
      title: 'Lynx'
    }
  },







  /*
  {
    path:'/notice',
    name:'Notice',
    component:()=>import('../views/Notice.vue')
  },
  {
    path:'/trade',
    name:"Trade",
    component:()=>import('../views/Trade.vue')
  },
  {
    path:'/investlist',
    name:"Investlist",
    component:()=>import('../views/Investlist.vue')
  },
  {
    path:'/withdrawal',
    name:"Withdrawal",
    component:()=>import('../views/Withdrawal.vue')
  },
  {
    path:'/withdrawlog',
    name:"WithdrawLog",
    component:()=>import('../views/WithdrawLog.vue')
  },
  {
    path:'/share',
    name:"Share",
    component:()=>import('../views/Share.vue')
  },
  {
    path:'/team',
    name:"Team",
    component:()=>import('../views/Team.vue')
  },
  {
    path:'/team_report',
    name:"TeamRepor",
    component:()=>import('../views/TeamReport.vue')
  },
  {
    path:'/tradelist',
    name:"Tradelist",   
    component:()=>import('../views/Tradelist.vue')
  },
  {
    path:'/elist',
    name:"Elist",   
    component:()=>import('../views/Elist.vue')
  },

  {
    path:'/bswitch',
    name:"Bswitch",   
    component:()=>import('../views/Bswitch.vue')
  },

  {
    path:'/promtion_exchange_log',
    name:"PromotionExchangeLog",   
    component:()=>import('../views/PromotionExchangeLog.vue')
  },

  {
    path:'/investpro',
    name:'Investpro',
    component:()=>import('../views/Investpro.vue')
  },
  {
    path:'/investprosuccess',
    name:'InvestproSuccess',
    component:()=>import('../views/InvestproSuccess.vue')
  },

  {
    path:'/investInfo',
    name:'InvestInfo',
    component:()=>import('../views/InvestInfo.vue')
  },
  */

]

const router = new VueRouter({
  routes
})

/*
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};
*/

router.beforeEach((to, from, next) => {
  //document.title = "Lynx";
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})

export default router



/*

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};

*/
