// pages/main/main.js

//logs.js
const util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js');

Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        list:[],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000
      
    },
    setMsg(e){
      // wx.navigateTo({
      //   url: '../mains/mains?id=' + e.target.dataset
      // })
      var that = this;
      wx.request({
        url: 'http://a.itying.com/api/productlist', //仅为示例，并非真实的接口地址
        data: {

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data);
          //用到this要注意this指向
          that.setData({
            list: res.data.result
          })
        }
      })
      console.log(e.target.dataset);
    },
    onShow: function () {
      console.log(util.jzfai);
      //解析html
      var article = '<div>我是HTML代码</div>';
      WxParse.wxParse('article', 'html', article, this, 5);
    },
});

