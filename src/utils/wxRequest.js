// 每个封装的文件都要向外输出一个对象
// 统一小程序wx.request请求
// 函数 url  ， params（参数）
//get  post
// @params -> json object
// params = {} -> 形参赋初值
// query -> 传查询参数
// method -> 方法
// 统一小程序wx.request请求
import wepy from 'wepy';
import util from '@/utils/util';
import md5 from '@/utils/md5';
// 函数 url, params, get post
// 函数 （封装）  函数不同，URL不同  params参数， 请求方法get/post
// @params json    query 传查询参数      method 方法
const API_SECRET_KEY = 'www.mall.cycle.com';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
//前端，服务器，验证
const wxRequest = async(params = {}, url) => {
    // wx.request
    let data = params.query || {}
    //在请求过程中带上时间戳常用的作法
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'Content-Type': 'application/json'}
    });
    return res
}

module.exports = {
    wxRequest
}