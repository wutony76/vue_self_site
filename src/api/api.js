import { post,get } from "./http.js";
//import { api_call } from "./httpex.js";

// 注册
//export const apiRegister = (p) => post("Home/Login/register", p);

//登录接口
export const apiLogin = (p) => post("Home/Login/submit", p);

// u退出登录
export const apiLoginout = (p) => post("Home/Login/loginout", p);

// 获取验证码
export const apiCode = (p) => get("Home/Login/code",p);

// 我得会员数据userlist
//export const apiUserInfo = (p) => post("Home/User/getUserInfo", p);
//export const apiUserInfo = (p) => api_call("user/get_info", p);

// 获取首页统计信息
//export const apiTotal=()=>post("Home/User/getTotal");
//export const apiTotal = () => api_call("user/get_total");

export const apiTradeList=()=>post("Home/User/tradingProfit");

export const apiTradeListAll=(p)=>get('Home/User/tradingProfitAll',p);

// 添加钱包收益
export const apiAddEarnings=(p)=>post("Home/User/addEarnings",p);

// 获取矿机列表
//export const apiMining=()=>get('Home/Mining/mining');

// 获取矿机信息
export const apiMiningInfo=(p)=>get('Home/Mining/miningInfo',p);

// 购买矿机
export const apiBuyMining=(p)=>post("Home/User/buyMining",p);

// 矿机订单
//export const apiMiningOrder=()=>get("Home/User/myMiningOrder");

// 我的团队信息
export const apiMyTeam=()=>get('Home/User/myTeam');

// 获取团队收益信息
export const apiTeamEarnings=(p)=>get('Home/User/myTeamEarnings',p);

// 获取利息列表
export const apiGetProfitList=(p)=>get('Home/User/getProfitList',p);

export const apiConverted=(p)=>post("Home/User/wallConverted",p);

//export const apiShareInfo=()=>get("Home/User/getShareInfo");

export const apiNotice=()=>get("Home/Notice/index");

//export const apiWithdrawal=(p)=>post("Home/User/withdrawal",p);

export const apiWithdrawalFee=()=>get("Home/User/withdrawalFee");

//export const apiWallet=(p)=>get("Home/User/wallet",p);

