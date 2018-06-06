import {wxRequest} from '@/utils/wxRequest';
const apiMall = 'https://sujiefs.com/';
//高阶函数
// const wxJsCode2Session = (params) => wxRequest(params, apiMall + 'api/wechat/jscode2session');
//`${apiMall}/api/wechat/jscode2session`);

              //  || 相当于

const wxJsCode2Session = (params) => {
  return wxRequest(params, apiMall + 'api/wechat/jscode2session');
}
export default{
  wxJsCode2Session
}